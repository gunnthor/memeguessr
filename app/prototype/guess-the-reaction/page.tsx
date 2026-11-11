import type { Metadata, Viewport } from "next";
import { GuessTheReaction } from "@/components/GuessTheReaction";
import { resolveChallenge } from "@/lib/guess-the-reaction";
import "./reaction.css";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Guess the Reaction — Prototype",
  description: "Five guesses. One hidden meme reaction. Follow the clues and find the punchline.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/prototype/guess-the-reaction" },
  openGraph: { title: "Guess the Reaction", description: "Can you find the hidden reaction?", images: [] },
  twitter: { card: "summary", title: "Guess the Reaction", description: "Can you find the hidden reaction?", images: [] },
};
export const viewport: Viewport = { themeColor: "#f5f2eb", colorScheme: "light" };

export default function ReactionPage({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const challenge = resolveChallenge(searchParams.round, searchParams.v);
  return <GuessTheReaction key={`${challenge.roundId}-${challenge.invalid}`} initialRoundId={challenge.roundId} invalidChallenge={challenge.invalid} />;
}
