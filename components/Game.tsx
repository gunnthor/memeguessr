"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  pickRounds,
  scoreRound,
  scoreEmoji,
  sliderToDate,
  SLIDER_MAX,
  formatMonthYear,
  monthsBetween,
  ROUNDS_PER_GAME,
  MAX_GAME_SCORE,
} from "@/lib/game";
import { recordDailyPlay, todayKey, type StreakState } from "@/lib/streak";
import { TimelineSlider } from "./TimelineSlider";

type LeaderRow = { name: string; score: number; day: string };

type Result = { memeId: string; score: number; monthsOff: number };

export function Game({ seed, mode }: { seed: number; mode: string }) {
  const rounds = useMemo(() => pickRounds(seed), [seed]);

  const [roundIndex, setRoundIndex] = useState(0);
  const [slider, setSlider] = useState(Math.floor(SLIDER_MAX / 2));
  const [revealed, setRevealed] = useState(false);
  const [results, setResults] = useState<Result[]>([]);

  const meme = rounds[roundIndex];
  const actualDate = new Date(meme.viralDate);
  const guessDate = sliderToDate(slider);
  const isLastRound = roundIndex === rounds.length - 1;
  // Hold on the final round's reveal until the player dismisses it — only then
  // fall through to the results screen. Otherwise locking in the last guess
  // would skip straight past its reveal (date, accuracy, blurb, source).
  const gameOver = results.length === rounds.length && !revealed;

  function submitGuess() {
    const score = scoreRound(guessDate, actualDate);
    const monthsOff = monthsBetween(guessDate, actualDate);
    setResults((r) => [...r, { memeId: meme.id, score, monthsOff }]);
    setRevealed(true);
  }

  function nextRound() {
    setRevealed(false);
    setSlider(Math.floor(SLIDER_MAX / 2));
    // On the last round, leave roundIndex in place; clearing `revealed` flips
    // gameOver true and the results screen takes over. Advancing would index
    // past the deck and read an undefined meme.
    if (!isLastRound) setRoundIndex((i) => i + 1);
  }

  if (gameOver) {
    return <Results results={results} rounds={rounds} mode={mode} />;
  }

  const lastResult = results[results.length - 1];

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col px-5 py-8">
      <header className="mb-4 flex items-center justify-between text-sm text-slate-400">
        <Link href="/" className="hover:text-slate-200">
          ← MemeGuessr
        </Link>
        <span>
          Round {roundIndex + 1} / {ROUNDS_PER_GAME}
        </span>
      </header>

      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
        {/* Using a plain img keeps remote/placeholder sources hassle-free. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={meme.image}
          alt="Guess when this meme went viral"
          className="h-full w-full object-contain"
        />
      </div>

      {revealed ? (
        <Reveal
          memeName={meme.name}
          blurb={meme.blurb}
          example={meme.example}
          source={meme.source}
          actualDate={actualDate}
          guessDate={guessDate}
          score={lastResult.score}
          isLastRound={isLastRound}
          onNext={nextRound}
        />
      ) : (
        <div className="mt-6 flex flex-col gap-6">
          {meme.example && (
            <div className="rounded-lg border border-slate-800 bg-slate-950/50 px-4 py-3">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Example
              </p>
              <p className="text-sm italic text-slate-300">{meme.example}</p>
            </div>
          )}
          <TimelineSlider value={slider} onChange={setSlider} />
          <button
            onClick={submitGuess}
            className="rounded-xl bg-brand px-8 py-4 text-lg font-semibold text-white transition hover:bg-brand-dark"
          >
            Lock in guess
          </button>
        </div>
      )}

      <div className="mt-auto pt-6 text-center text-xs text-slate-600">
        Running total:{" "}
        {results.reduce((a, r) => a + r.score, 0).toLocaleString()} /{" "}
        {MAX_GAME_SCORE.toLocaleString()}
      </div>
    </main>
  );
}

function Reveal({
  memeName,
  blurb,
  example,
  source,
  actualDate,
  guessDate,
  score,
  isLastRound,
  onNext,
}: {
  memeName: string;
  blurb: string;
  example?: string;
  source: string;
  actualDate: Date;
  guessDate: Date;
  score: number;
  isLastRound: boolean;
  onNext: () => void;
}) {
  const monthsOff = Math.abs(monthsBetween(guessDate, actualDate));
  return (
    <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
      <div className="flex items-baseline justify-between">
        <h2 className="text-xl font-bold">{memeName}</h2>
        <span className="text-2xl font-extrabold text-brand">
          +{score.toLocaleString()}
        </span>
      </div>
      <div className="text-sm text-slate-300">
        <p>
          Actual:{" "}
          <span className="font-semibold text-slate-100">
            {formatMonthYear(actualDate)}
          </span>{" "}
          · You guessed {formatMonthYear(guessDate)}
        </p>
        <p className="text-slate-400">
          {monthsOff === 0
            ? "Spot on! 🎯"
            : `${monthsOff} month${monthsOff === 1 ? "" : "s"} off`}
        </p>
      </div>
      <p className="text-sm text-slate-400">{blurb}</p>
      {example && (
        <div className="rounded-lg border border-slate-800 bg-slate-950/50 px-4 py-3">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Example
          </p>
          <p className="text-sm italic text-slate-300">{example}</p>
        </div>
      )}
      <a
        href={source}
        target="_blank"
        rel="noreferrer"
        className="text-xs text-brand hover:underline"
      >
        Source ↗
      </a>
      <button
        onClick={onNext}
        className="mt-2 rounded-xl bg-brand px-8 py-3 text-lg font-semibold text-white transition hover:bg-brand-dark"
      >
        {isLastRound ? "See results" : "Next meme"}
      </button>
    </div>
  );
}

function Results({
  results,
  rounds,
  mode,
}: {
  results: Result[];
  rounds: ReturnType<typeof pickRounds>;
  mode: string;
}) {
  const isDaily = mode === "daily";
  const total = results.reduce((a, r) => a + r.score, 0);
  const grid = results.map((r) => scoreEmoji(r.score)).join("");
  const [copied, setCopied] = useState(false);
  const [streak, setStreak] = useState<StreakState | null>(null);

  // Record the daily streak once when the results mount.
  useEffect(() => {
    if (isDaily) setStreak(recordDailyPlay());
  }, [isDaily]);

  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/r?score=${total}&grid=${encodeURIComponent(grid)}&mode=${mode}`
      : "";
  const shareText = `MemeGuessr ${isDaily ? "Daily" : ""}\n${grid}\n${total.toLocaleString()} / ${MAX_GAME_SCORE.toLocaleString()}`;

  async function share() {
    try {
      if (navigator.share) {
        await navigator.share({ text: shareText, url: shareUrl });
      } else {
        await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      /* user dismissed share sheet */
    }
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-12 text-center">
      <h1 className="text-2xl font-bold text-slate-300">Final score</h1>
      <div className="my-3 text-6xl font-extrabold text-brand">
        {total.toLocaleString()}
      </div>
      <div className="text-slate-500">out of {MAX_GAME_SCORE.toLocaleString()}</div>

      <div className="my-6 text-3xl tracking-widest">{grid}</div>

      {isDaily && streak && (
        <div className="mb-4 flex gap-4 text-sm">
          <span className="rounded-full bg-orange-500/15 px-4 py-1.5 font-semibold text-orange-300">
            🔥 {streak.current} day streak
          </span>
          <span className="rounded-full bg-slate-800 px-4 py-1.5 text-slate-300">
            Best: {streak.best}
          </span>
        </div>
      )}

      <div className="w-full max-w-md space-y-2">
        {results.map((r, i) => (
          <div
            key={r.memeId}
            className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-2 text-sm"
          >
            <span className="text-slate-300">
              {scoreEmoji(r.score)} {rounds[i].name}
            </span>
            <span className="font-semibold text-slate-200">
              {r.score.toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={share}
          className="rounded-xl bg-brand px-8 py-3 text-lg font-semibold text-white transition hover:bg-brand-dark"
        >
          {copied ? "Copied!" : "Share result"}
        </button>
        <Link
          href={isDaily ? "/play?mode=random" : "/play?mode=daily"}
          className="rounded-xl border border-slate-700 px-8 py-3 text-lg font-semibold text-slate-200 transition hover:bg-slate-800"
        >
          {isDaily ? "Play a random game" : "Play today's Daily"}
        </Link>
      </div>

      {isDaily && <Leaderboard total={total} />}
    </main>
  );
}

function Leaderboard({ total }: { total: number }) {
  const [name, setName] = useState("");
  const [rows, setRows] = useState<LeaderRow[] | null>(null);
  const [enabled, setEnabled] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const day = todayKey();

  // Load today's leaderboard on mount.
  useEffect(() => {
    let active = true;
    fetch(`/api/leaderboard?day=${day}`)
      .then((r) => r.json())
      .then((d) => {
        if (!active) return;
        setEnabled(d.enabled);
        setRows(d.scores ?? []);
      })
      .catch(() => active && setEnabled(false));
    return () => {
      active = false;
    };
  }, [day]);

  async function submit() {
    setLoading(true);
    try {
      const r = await fetch("/api/leaderboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name || "anon", score: total, day }),
      });
      const d = await r.json();
      setEnabled(d.enabled);
      setRows(d.scores ?? []);
      setSubmitted(true);
    } catch {
      setEnabled(false);
    } finally {
      setLoading(false);
    }
  }

  if (!enabled) {
    return (
      <p className="mt-10 max-w-md text-xs text-slate-600">
        Daily leaderboard is offline (no database configured). See the README to
        connect Vercel Postgres.
      </p>
    );
  }

  return (
    <div className="mt-10 w-full max-w-md">
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
        Today&apos;s leaderboard
      </h2>

      {!submitted && (
        <div className="mb-4 flex gap-2">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={24}
            placeholder="Your name"
            className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-brand"
          />
          <button
            onClick={submit}
            disabled={loading}
            className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:opacity-50"
          >
            {loading ? "…" : "Submit"}
          </button>
        </div>
      )}

      <ol className="space-y-1.5">
        {(rows ?? []).map((row, i) => (
          <li
            key={`${row.name}-${i}`}
            className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-2 text-sm"
          >
            <span className="text-slate-300">
              <span className="mr-2 text-slate-500">{i + 1}.</span>
              {row.name}
            </span>
            <span className="font-semibold text-slate-200">
              {row.score.toLocaleString()}
            </span>
          </li>
        ))}
        {rows && rows.length === 0 && (
          <li className="text-center text-xs text-slate-600">
            No scores yet today — be the first!
          </li>
        )}
      </ol>
    </div>
  );
}
