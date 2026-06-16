import { ImageResponse } from "next/og";
import { MAX_GAME_SCORE } from "@/lib/game";

// Edge is Vercel's recommended runtime for OG images. NOTE: rendering this
// route fails on local Windows (a known next/og path bug); it renders correctly
// on Vercel and any Linux/macOS machine. Use `npm run dev` to preview locally.
export const runtime = "edge";

// Renders a 1200x630 share card: GET /api/og?score=18200&grid=🟩🟨🟧⬛🟩
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const score = Number(searchParams.get("score") ?? 0);
  const grid = (searchParams.get("grid") ?? "").slice(0, 10);
  const daily = searchParams.get("mode") === "daily";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#020617",
          backgroundImage:
            "radial-gradient(60% 60% at 50% 0%, rgba(124,58,237,0.35), transparent 70%)",
          color: "#f1f5f9",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: -2 }}>
          MemeGuessr
        </div>
        {daily ? (
          <div style={{ fontSize: 28, color: "#94a3b8", marginTop: 4 }}>
            Daily Meme
          </div>
        ) : null}
        <div style={{ fontSize: 80, marginTop: 24, letterSpacing: 8 }}>{grid}</div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            color: "#a78bfa",
            marginTop: 16,
          }}
        >
          {score.toLocaleString()}
        </div>
        <div style={{ fontSize: 30, color: "#64748b" }}>
          {`out of ${MAX_GAME_SCORE.toLocaleString()}`}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
