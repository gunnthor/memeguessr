import Link from "next/link";
import { MEMES } from "@/data/memes";
import { MIN_YEAR, MAX_YEAR, ROUNDS_PER_GAME, MAX_GAME_SCORE } from "@/lib/game";

const faqs = [
  {
    q: "What is MemeGuessr?",
    a: "MemeGuessr is a free daily meme-guessing game. You're shown a famous internet meme and you drag a timeline to guess the month it went viral. It's like GeoGuessr or TimeGuessr, but for meme history.",
  },
  {
    q: "How do you play?",
    a: `Each game has ${ROUNDS_PER_GAME} rounds. For every meme, slide the timeline to the month you think it blew up and lock in your guess. The closer you are, the more points you score — up to ${MAX_GAME_SCORE.toLocaleString()} total.`,
  },
  {
    q: "What is the Daily Meme?",
    a: "Every day there's a Daily Meme game that's the same for everyone, so you can compare scores with friends and build a day-by-day streak. There's also an unlimited Random mode.",
  },
  {
    q: "Is MemeGuessr free?",
    a: "Yes. MemeGuessr is completely free to play in your browser, with no sign-up required.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col items-center px-6 py-16 text-center">
      <section className="flex min-h-[70vh] flex-col items-center justify-center">
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
      </section>

      {/* Indexable content for search engines + new players. */}
      <section className="mt-8 w-full max-w-2xl space-y-12 text-left">
        <div>
          <h2 className="text-2xl font-bold">
            The daily meme-guessing game
          </h2>
          <p className="mt-3 text-slate-300">
            MemeGuessr is a free daily game about internet culture. If you&apos;ve
            played GeoGuessr, TimeGuessr, or a Wordle-style daily puzzle,
            you&apos;ll feel right at home — except here you&apos;re guessing{" "}
            <em>when</em> a meme went viral. From Rage Comics and advice animals
            to Distracted Boyfriend, Stonks, and the Will Smith slap, the deck
            spans {MIN_YEAR}–{MAX_YEAR} of meme history.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">How to play</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-300">
            <li>You&apos;re shown a famous meme.</li>
            <li>Drag the timeline to the month you think it went viral.</li>
            <li>Lock in your guess — the closer you are, the more points.</li>
            <li>
              After {ROUNDS_PER_GAME} rounds, see your score out of{" "}
              {MAX_GAME_SCORE.toLocaleString()} and share your result.
            </li>
            <li>
              Come back for the Daily Meme to keep your streak alive and climb
              the leaderboard.
            </li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Frequently asked questions</h2>
          <dl className="mt-3 space-y-5">
            {faqs.map((f) => (
              <div key={f.q}>
                <dt className="font-semibold text-slate-100">{f.q}</dt>
                <dd className="mt-1 text-slate-300">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
