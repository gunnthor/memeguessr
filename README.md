# MemeGuessr

A GeoGuessr-style daily game for memes. You're shown a meme; drag the timeline
to guess **when it went viral**. Five rounds, closest guesses win, share your
emoji-grid score.

Built with Next.js (App Router) + Tailwind, ready to deploy on Vercel.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## How it works

- **Core loop** — [components/Game.tsx](components/Game.tsx): show meme → timeline
  guess → reveal + score → next → results + share.
- **Scoring** — [lib/game.ts](lib/game.ts): points fall off with an ~18-month
  half-life, so a perfect month scores 5,000 and being years off scores ~0.
  Max game score 25,000 across 5 rounds.
- **Modes** — `/play?mode=daily` gives everyone the same memes today (seeded by
  date); `/play?mode=random` reshuffles each game.
- **Content** — [data/memes.ts](data/memes.ts): the meme deck. Each entry has a
  name, image URL, `viralDate`, a reveal blurb, and a `source` citation. Images
  are Imgflip-hosted meme templates.
- **Daily streak** — [lib/streak.ts](lib/streak.ts): consecutive-day streak +
  best, stored in the browser's localStorage. Shown on the Daily results screen.
- **Daily leaderboard** — [lib/db.ts](lib/db.ts) + [app/api/leaderboard/route.ts](app/api/leaderboard/route.ts):
  submit your name + score for today, see the top 10. Backed by Vercel Postgres
  (see setup below). Degrades gracefully to "offline" when no DB is configured.
- **Share image** — [app/api/og/route.tsx](app/api/og/route.tsx) renders a
  1200×630 OG card per result; [app/r/page.tsx](app/r/page.tsx) is the shareable
  result link that points its OpenGraph/Twitter tags at that card.

## Leaderboard setup (Vercel Postgres)

The leaderboard is optional — the app runs fine without it (shows "offline").
To enable it:

1. In your Vercel project: **Storage → Create Database → Postgres**, then
   **Connect** it to the project. Vercel injects `POSTGRES_URL` (and friends).
2. For local dev, copy those vars into `.env.local`:
   ```
   POSTGRES_URL="postgres://..."
   ```
   (Vercel's dashboard shows the exact connection string under `.env.local`.)
3. The `scores` table is created automatically on first write — no migration
   step needed.

## Sharing & OG images

The **Share** button uses the native share sheet (mobile) or copies a link like
`/r?score=18200&grid=🟩🟨🟧⬛🟩&mode=daily`. When that link is posted, the
dynamic OG card at `/api/og` renders the score.

> ⚠️ The OG route renders on **Vercel and under `npm run dev`**, but `npm run
> build && npm start` fails to render it on **Windows** (a known `next/og` path
> bug in the edge-runtime emulator). This does not affect production on Vercel.

## ⚠️ Before launch: content & licensing

Images in `data/memes.ts` are real meme templates hosted by **Imgflip**
(`i.imgflip.com`). That's fine for prototyping, but for a public launch:

1. **Confirm image rights.** Meme template images can be copyrighted. The
   conservative move is to host images you've vetted yourself (download +
   serve from `/public` or a CDN) rather than hotlinking Imgflip.
2. **Verify every `viralDate`** against the cited `source` (Know Your Meme,
   the original post, or a Google Trends peak). Accuracy is the whole game —
   the dates here are researched approximations, not gospel.
3. Tighten `next.config.mjs` `remotePatterns` to only the image hosts you use.
4. Grow the deck — 106 memes ship today (2008–2024); aim for 100+ over time so
   Daily has years of runway.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel: **New Project → import the repo**. It auto-detects Next.js — no
   config needed. Deploy.
3. Add your domain under **Settings → Domains** and point DNS as Vercel
   instructs.

## Next ideas (not yet built)

- A second guess axis per round (origin platform, template name).
- Themed packs (Vine era, 2010s Tumblr, COVID memes) and an endless mode.
- Auth so leaderboards/streaks follow a user across devices.
- Anti-cheat on score submission (currently a name + score POST; clamp/validate
  server-side or sign results before trusting the leaderboard).
