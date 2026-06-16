import Link from "next/link";
import { MEMES } from "@/data/memes";
import { MIN_YEAR, MAX_YEAR, ROUNDS_PER_GAME } from "@/lib/game";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
        Meme<span className="text-brand">Guessr</span>
      </h1>
      <p className="mt-4 text-lg text-slate-300">
        When did this meme blow up? Drag the timeline to guess the month each
        meme went viral. {ROUNDS_PER_GAME} rounds. Closer = more points.
      </p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/play?mode=daily"
          className="rounded-xl bg-brand px-8 py-4 text-lg font-semibold text-white transition hover:bg-brand-dark"
        >
          Play today&apos;s Daily Meme
        </Link>
        <Link
          href="/play?mode=random"
          className="rounded-xl border border-slate-700 px-8 py-4 text-lg font-semibold text-slate-200 transition hover:bg-slate-800"
        >
          Random game
        </Link>
      </div>

      <p className="mt-10 text-sm text-slate-500">
        {MEMES.length} memes in the deck · timeline spans {MIN_YEAR}–{MAX_YEAR}
      </p>
    </main>
  );
}
