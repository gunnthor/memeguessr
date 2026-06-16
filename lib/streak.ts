// Daily streak tracking, stored locally per browser.

const KEY = "memeguessr.streak";

export type StreakState = {
  current: number;
  best: number;
  lastDay: string; // YYYY-MM-DD of last completed Daily
};

export function todayKey(d = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function read(): StreakState {
  if (typeof window === "undefined") return { current: 0, best: 0, lastDay: "" };
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw) as StreakState;
  } catch {
    /* ignore */
  }
  return { current: 0, best: 0, lastDay: "" };
}

function write(s: StreakState) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    /* ignore */
  }
}

/** Call once when a Daily game completes. Idempotent for the same day. */
export function recordDailyPlay(day = todayKey()): StreakState {
  const s = read();
  if (s.lastDay === day) return s; // already counted today

  const prev = new Date(day);
  prev.setDate(prev.getDate() - 1);
  const yesterday = todayKey(prev);

  const current = s.lastDay === yesterday ? s.current + 1 : 1;
  const next: StreakState = {
    current,
    best: Math.max(s.best, current),
    lastDay: day,
  };
  write(next);
  return next;
}

export function getStreak(): StreakState {
  return read();
}
