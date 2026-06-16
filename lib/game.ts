import { MEMES, type Meme } from "@/data/memes";

export const ROUNDS_PER_GAME = 5;
export const MAX_SCORE_PER_ROUND = 5000;
export const MAX_GAME_SCORE = ROUNDS_PER_GAME * MAX_SCORE_PER_ROUND;

// Timeline bounds (years) the slider spans.
export const MIN_YEAR = 2005;
export const MAX_YEAR = new Date().getFullYear();

/**
 * Score a single round based on how many months the guess is off.
 * Perfect month = full points; falls off exponentially so being a year out
 * still scores, but a half-decade out scores ~nothing.
 */
export function scoreRound(guessDate: Date, actualDate: Date): number {
  const monthsOff = Math.abs(monthsBetween(guessDate, actualDate));
  // Half-life of ~18 months: every 18 months off halves the score.
  const score = MAX_SCORE_PER_ROUND * Math.pow(0.5, monthsOff / 18);
  return Math.round(score);
}

export function monthsBetween(a: Date, b: Date): number {
  return (a.getFullYear() - b.getFullYear()) * 12 + (a.getMonth() - b.getMonth());
}

/** Emoji bucket for a round score, used in the shareable result grid. */
export function scoreEmoji(score: number): string {
  const pct = score / MAX_SCORE_PER_ROUND;
  if (pct >= 0.9) return "🟩";
  if (pct >= 0.6) return "🟨";
  if (pct >= 0.3) return "🟧";
  return "⬛";
}

export function formatMonthYear(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

/** Convert a slider value (months since MIN_YEAR) to a Date. */
export function sliderToDate(monthsSinceMin: number): Date {
  return new Date(MIN_YEAR, monthsSinceMin, 1);
}

/** Total months the slider can span. */
export const SLIDER_MAX = (MAX_YEAR - MIN_YEAR + 1) * 12 - 1;

/** Deterministic shuffle so a given seed always yields the same game order. */
export function pickRounds(seed: number, count = ROUNDS_PER_GAME): Meme[] {
  const pool = [...MEMES];
  const rng = mulberry32(seed);
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, Math.min(count, pool.length));
}

/** Today's date as a numeric seed (YYYYMMDD) for the Daily Meme mode. */
export function dailySeed(d = new Date()): number {
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

function mulberry32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
