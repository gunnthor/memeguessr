import type { Metadata } from "next";
import Link from "next/link";
import { MAX_GAME_SCORE } from "@/lib/game";

// Shareable result page. The share button links here with ?score=&grid=&mode=
// so that when the link is posted, the dynamic OG card renders the score.

type SP = { score?: string; grid?: string; mode?: string };

export function generateMetadata({
  searchParams,
}: {
  searchParams: SP;
}): Metadata {
  const score = searchParams.score ?? "0";
  const grid = searchParams.grid ?? "";
  const mode = searchParams.mode ?? "random";
  const ogUrl = `/api/og?score=${encodeURIComponent(score)}&grid=${encodeURIComponent(grid)}&mode=${encodeURIComponent(mode)}`;
  const title = `I scored ${Number(score).toLocaleString()} on MemeGuessr`;

  return {
    title,
    description: "Guess when each meme went viral. Can you beat my score?",
    // Infinite score/grid permutations — great for sharing, not for indexing.
    robots: { index: false, follow: true },
    openGraph: {
      title,
      description: "Guess when each meme went viral. Can you beat my score?",
      images: [{ url: ogUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      images: [ogUrl],
    },
  };
}

export default function ResultPage({ searchParams }: { searchParams: SP }) {
  const score = Number(searchParams.score ?? 0);
  const grid = searchParams.grid ?? "";

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-12 text-center">
      <h1 className="text-2xl font-bold text-slate-300">A MemeGuessr result</h1>
      <div className="my-3 text-6xl font-extrabold text-brand">
        {score.toLocaleString()}
      </div>
      <div className="text-slate-500">out of {MAX_GAME_SCORE.toLocaleString()}</div>
      <div className="my-6 text-3xl tracking-widest">{grid}</div>
      <Link
        href="/play?mode=daily"
        className="rounded-xl bg-brand px-8 py-4 text-lg font-semibold text-white transition hover:bg-brand-dark"
      >
        Can you beat it? Play today&apos;s Daily
      </Link>
    </main>
  );
}
