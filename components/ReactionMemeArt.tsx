"use client";

import Image from "next/image";
import { useState } from "react";
import type { ReactionMeme } from "@/data/guess-the-reaction";

export function ReactionMemeArt({ meme, preview, showName = true }: { meme: ReactionMeme; preview?: string; showName?: boolean }) {
  const [failedSource, setFailedSource] = useState<string>();
  const source = preview ?? meme.localImage;
  const hasImage = !!source && source !== failedSource;

  return <span className={`reaction-art ${hasImage ? "reaction-art-has-image" : "reaction-art-fallback"}`}>
    {hasImage ? <Image src={source} alt="" width={640} height={480} sizes="(max-width: 760px) 44vw, 560px" unoptimized={source.startsWith("blob:")} className="reaction-local-image" onError={() => setFailedSource(source)} /> : <span className="reaction-emoji" aria-hidden="true">{meme.emoji}</span>}
    <span className={showName || !hasImage ? "reaction-art-caption" : "sr-only"}>{meme.name}</span>
    {source && !hasImage && <span className="reaction-image-error">Image unavailable · text fallback</span>}
  </span>;
}
