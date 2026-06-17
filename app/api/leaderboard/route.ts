import { NextResponse } from "next/server";
import { dbEnabled, submitScore, topScores } from "@/lib/db";
import { MAX_GAME_SCORE } from "@/lib/game";

const DAY_RE = /^\d{4}-\d{2}-\d{2}$/;
const MAX_NAME_LEN = 24;

/**
 * A submitted day is only trusted if it's a real calendar date within ~1 day of
 * the server's UTC "today". The tolerance absorbs client timezone skew near
 * midnight while blocking backfill of arbitrary past/future days.
 */
function isPlausibleDay(day: string): boolean {
  const ms = Date.parse(`${day}T00:00:00Z`);
  if (Number.isNaN(ms)) return false; // rejects impossible dates like 2026-13-40
  const dayMs = 86_400_000;
  return Math.abs(ms - Date.now()) <= dayMs * 1.5;
}

/** Drop control characters, trim, cap length; fall back to "anon". */
function sanitizeName(raw: string): string {
  let out = "";
  for (const ch of raw) {
    const code = ch.codePointAt(0) ?? 0;
    if (code >= 32 && code !== 127) out += ch; // skip C0 controls + DEL
  }
  return out.trim().slice(0, MAX_NAME_LEN) || "anon";
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const day = searchParams.get("day") ?? "";
  if (!DAY_RE.test(day)) {
    return NextResponse.json({ error: "invalid day" }, { status: 400 });
  }
  try {
    const scores = await topScores(day);
    return NextResponse.json({ enabled: dbEnabled, scores });
  } catch (e) {
    return NextResponse.json({ enabled: false, scores: [] });
  }
}

export async function POST(req: Request) {
  let body: { name?: string; score?: number; day?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }

  const { name, score, day } = body;

  // Shape checks.
  if (
    typeof name !== "string" ||
    typeof score !== "number" ||
    typeof day !== "string" ||
    !DAY_RE.test(day)
  ) {
    return NextResponse.json({ error: "invalid fields" }, { status: 400 });
  }

  // A legitimate client only ever produces an integer score in [0, MAX_GAME_SCORE]
  // (sum of per-round Math.round results), submitted for a near-current day.
  // Anything outside that is a forged payload, not a real game.
  if (
    !Number.isInteger(score) ||
    score < 0 ||
    score > MAX_GAME_SCORE ||
    !isPlausibleDay(day)
  ) {
    return NextResponse.json({ error: "invalid score" }, { status: 400 });
  }

  if (!dbEnabled) {
    return NextResponse.json({ enabled: false, scores: [] });
  }

  try {
    await submitScore({ name: sanitizeName(name), score, day });
    const scores = await topScores(day);
    return NextResponse.json({ enabled: true, scores });
  } catch (e) {
    return NextResponse.json({ error: "db error" }, { status: 500 });
  }
}
