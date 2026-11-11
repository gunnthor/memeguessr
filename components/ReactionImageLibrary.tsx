"use client";

import { useEffect, useRef, useState } from "react";
import { COLLECTION, type MemeId } from "@/data/guess-the-reaction";
import { reactionImageError, REACTION_IMAGE_TYPES } from "@/lib/reaction-images";
import { ReactionMemeArt } from "./ReactionMemeArt";

export type ReactionPreviews = Partial<Record<MemeId, string>>;

export function useReactionPreviews() {
  const [previews, setPreviews] = useState<ReactionPreviews>({});
  const urls = useRef<ReactionPreviews>({});
  const pending = useRef(new Set<string>());
  const requests = useRef<Partial<Record<MemeId, number>>>({});
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    const currentUrls = urls.current;
    const pendingUrls = pending.current;
    return () => {
      mounted.current = false;
      Object.values(currentUrls).forEach((url) => URL.revokeObjectURL(url));
      pendingUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  async function addImage(id: MemeId, file: File): Promise<string | null> {
    const error = reactionImageError(file);
    if (error) return error;
    const request = (requests.current[id] ?? 0) + 1;
    requests.current[id] = request;
    const url = URL.createObjectURL(file);
    pending.current.add(url);
    try {
      const image = new window.Image();
      image.src = url;
      await image.decode();
      if (!mounted.current || requests.current[id] !== request) return null;
      const previous = urls.current[id];
      urls.current[id] = url;
      pending.current.delete(url);
      setPreviews({ ...urls.current });
      if (previous) URL.revokeObjectURL(previous);
      return null;
    } catch {
      return "That image could not be opened. Try a different file.";
    } finally {
      if (pending.current.delete(url)) URL.revokeObjectURL(url);
    }
  }

  function removeImage(id: MemeId) {
    requests.current[id] = (requests.current[id] ?? 0) + 1;
    const previous = urls.current[id];
    delete urls.current[id];
    setPreviews({ ...urls.current });
    if (previous) URL.revokeObjectURL(previous);
  }

  return { previews, addImage, removeImage };
}

export function ReactionImageLibrary({ previews, addImage, removeImage }: {
  previews: ReactionPreviews;
  addImage: (id: MemeId, file: File) => Promise<string | null>;
  removeImage: (id: MemeId) => void;
}) {
  const [status, setStatus] = useState("");
  const count = COLLECTION.filter((meme) => previews[meme.id] ?? meme.localImage).length;

  return <details className="reaction-image-library" id="reaction-image-library">
    <summary><span><strong>Swap meme images</strong><span>Preview your own images in this tab</span></span><span className="reaction-library-count">{count}/10 images <span aria-hidden="true">＋</span></span></summary>
    <div className="reaction-library-body">
      <p>Choose meme images you have permission to use. They stay in this tab, work across situations and disappear on refresh. Challenge links do not include them.</p>
      <p className="reaction-small">JPG, PNG, WebP, GIF or AVIF · up to 6 MB each. Use the original template so visual clues still match.</p>
      <div className="reaction-library-grid">{COLLECTION.map((meme) => <div className="reaction-library-item" key={meme.id}>
        <ReactionMemeArt meme={meme} preview={previews[meme.id]} />
        <label className="reaction-file-label">{previews[meme.id] || meme.localImage ? "Replace image" : "Choose image"}<span className="sr-only"> for {meme.name}</span><input type="file" accept={REACTION_IMAGE_TYPES.join(",")} onChange={async (event) => {
          const file = event.target.files?.[0];
          event.target.value = "";
          if (!file) return;
          setStatus(`Opening image for ${meme.name}…`);
          const error = await addImage(meme.id, file);
          setStatus(error ? `${meme.name}: ${error}` : `Image ready for ${meme.name}.`);
        }} /></label>
        {previews[meme.id] && <button className="reaction-remove-image" onClick={() => { removeImage(meme.id); setStatus(`Default image restored for ${meme.name}.`); }}>Use default<span className="sr-only"> image for {meme.name}</span></button>}
      </div>)}</div>
      <p role="status" className="reaction-library-status">{status || "No images are uploaded to a server."}</p>
    </div>
  </details>;
}
