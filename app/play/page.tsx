import type { Metadata } from "next";
import { Game } from "@/components/Game";
import { dailySeed } from "@/lib/game";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Play — Guess When the Meme Went Viral",
  description:
    "Play MemeGuessr: drag the timeline to guess the month each meme went viral. Five rounds, score out of 25,000, and share your result.",
  alternates: { canonical: "/play" },
};

export default function PlayPage({
  searchParams,
}: {
  searchParams: { mode?: string };
}) {
  const mode = searchParams.mode === "daily" ? "daily" : "random";
  // Daily mode: everyone gets the same memes today. Random: fresh each load.
  const seed = mode === "daily" ? dailySeed() : Math.floor(Math.random() * 1e9);

  // Key on mode+seed so navigating between Daily and Random remounts Game with
  // fresh state instead of reusing the finished game's results screen.
  return <Game key={`${mode}-${seed}`} seed={seed} mode={mode} />;
}
