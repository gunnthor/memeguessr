import { sql } from "@vercel/postgres";

// Leaderboard storage. Uses Vercel Postgres when POSTGRES_URL is configured;
// otherwise every call no-ops so local dev (and previews without a DB) still
// run — the UI just shows "leaderboard unavailable".

export const dbEnabled = Boolean(process.env.POSTGRES_URL);

export type ScoreRow = {
  name: string;
  score: number;
  day: string; // YYYY-MM-DD (the Daily Meme date)
};

let ensured = false;
async function ensureTable() {
  if (ensured) return;
  await sql`
    CREATE TABLE IF NOT EXISTS scores (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      score INTEGER NOT NULL,
      day DATE NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `;
  await sql`CREATE INDEX IF NOT EXISTS scores_day_score_idx ON scores (day, score DESC);`;
  ensured = true;
}

export async function submitScore(row: ScoreRow): Promise<void> {
  if (!dbEnabled) return;
  await ensureTable();
  const name = row.name.trim().slice(0, 24) || "anon";
  const score = Math.max(0, Math.min(25000, Math.round(row.score)));
  await sql`INSERT INTO scores (name, score, day) VALUES (${name}, ${score}, ${row.day});`;
}

export async function topScores(
  day: string,
  limit = 10
): Promise<ScoreRow[]> {
  if (!dbEnabled) return [];
  await ensureTable();
  const { rows } = await sql<ScoreRow>`
    SELECT name, score, to_char(day, 'YYYY-MM-DD') AS day
    FROM scores
    WHERE day = ${day}
    ORDER BY score DESC, created_at ASC
    LIMIT ${limit};
  `;
  return rows;
}
