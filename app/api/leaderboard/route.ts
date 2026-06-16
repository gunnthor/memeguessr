import { NextResponse } from "next/server";
import { dbEnabled, submitScore, topScores } from "@/lib/db";

const DAY_RE = /^\d{4}-\d{2}-\d{2}$/;

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
  if (
    typeof name !== "string" ||
    typeof score !== "number" ||
    !Number.isFinite(score) ||
    typeof day !== "string" ||
    !DAY_RE.test(day)
  ) {
    return NextResponse.json({ error: "invalid fields" }, { status: 400 });
  }

  if (!dbEnabled) {
    return NextResponse.json({ enabled: false, scores: [] });
  }

  try {
    await submitScore({ name, score, day });
    const scores = await topScores(day);
    return NextResponse.json({ enabled: true, scores });
  } catch (e) {
    return NextResponse.json({ error: "db error" }, { status: 500 });
  }
}
