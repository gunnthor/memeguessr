import { ImageResponse } from "next/og";
import { MAX_GAME_SCORE } from "@/lib/game";

// Edge is Vercel's recommended runtime for OG images. NOTE: rendering this
// route fails on local Windows (a known next/og path bug); it renders correctly
// on Vercel and any Linux/macOS machine. Use `npm run dev` to preview locally.
export const runtime = "edge";

const shell = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  background: "#020617",
  backgroundImage:
    "radial-gradient(60% 60% at 50% 0%, rgba(124,58,237,0.35), transparent 70%)",
  color: "#f1f5f9",
  fontFamily: "sans-serif",
};

// Renders a 1200x630 share card.
//   Result:   GET /api/og?score=18200&grid=🟩🟨🟧⬛🟩&mode=daily
//   Homepage: GET /api/og?home=1
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  // Branded homepage / default social card.
  if (searchParams.get("home")) {
    return new ImageResponse(
      (
        <div style={shell}>
          <div style={{ fontSize: 96, fontWeight: 800, letterSpacing: -3 }}>
            MemeGuessr
          </div>
          <div
            style={{
              fontSize: 40,
              color: "#a78bfa",
              marginTop: 12,
              fontWeight: 600,
            }}
          >
            Guess when the meme went viral
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#94a3b8",
              marginTop: 28,
              textAlign: "center",
            }}
          >
            A daily meme-guessing game · 5 rounds · share your streak
          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    );
  }

  const score = Number(searchParams.get("score") ?? 0);
  const grid = (searchParams.get("grid") ?? "").slice(0, 10);
  const daily = searchParams.get("mode") === "daily";

  return new ImageResponse(
    (
      <div style={shell}>
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
