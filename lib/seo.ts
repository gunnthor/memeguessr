// Central SEO constants. Override the canonical URL per-environment with
// NEXT_PUBLIC_SITE_URL (e.g. a preview deploy) if needed.

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://memeguessr.com"
).replace(/\/$/, "");

export const SITE_NAME = "MemeGuessr";

export const SITE_TAGLINE = "Guess When the Meme Went Viral";

export const SITE_DESCRIPTION =
  "MemeGuessr is a free daily meme-guessing game. You're shown a famous meme — drag the timeline to guess the month it went viral. Five rounds, score out of 25,000, build a streak, and share your result.";

export const SITE_KEYWORDS = [
  "memeguessr",
  "meme guessing game",
  "guess the meme",
  "daily meme game",
  "meme quiz",
  "meme trivia",
  "geoguessr for memes",
  "timeguessr memes",
  "when did this meme go viral",
  "meme history game",
  "internet culture quiz",
];
