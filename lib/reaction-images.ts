export const REACTION_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif"] as const;
export const MAX_REACTION_IMAGE_BYTES = 6 * 1024 * 1024;

export function reactionImageError(file: { type: string; size: number }): string | null {
  if (!(REACTION_IMAGE_TYPES as readonly string[]).includes(file.type)) return "Choose a JPG, PNG, WebP, GIF or AVIF image.";
  if (file.size === 0) return "That file is empty. Choose another image.";
  if (file.size > MAX_REACTION_IMAGE_BYTES) return "Choose an image smaller than 6 MB.";
  return null;
}
