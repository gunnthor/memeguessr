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

### Guess the Reaction prototype

Open `/prototype/guess-the-reaction` after starting the local server. The original
date-guessing game remains at `/play`. No deployment or services are needed.

This prototype has five authored situations, ten searchable reaction cards,
45 hand-written responses, three optional ordered hints, and a five-guess limit.
Each answer is an authored punchline; other reactions may fit the situation too.
Results include native sharing, clipboard and visible-text fallbacks. Challenges
use `?v=1&round=<stable-situation-id>` and start with fresh progress; invalid IDs
or versions fall back to the first situation. Progress lives only in local React
state, and Next situation visits all five situations before repeating.

- Content, aliases, hints and validation: `data/guess-the-reaction.ts`.
- Pure game transitions, search and challenge helpers: `lib/guess-the-reaction.ts`.
- UI: `components/GuessTheReaction.tsx`; route-scoped CSS beside the page.
- Checks: `npm run test:reaction`, `npx tsc --noEmit`, `npm run build`.

Cards are image-first when assets are available, with optional visible captions
and accessible names. The confirmation previews the selected reaction, the newest
clue appears beside the collection, and the reveal pairs the situation with the
full reaction. Hints are next to search on mobile and desktop. The full trail of
guesses remains below the collection.

All ten meme images now ship locally, reusing the original game's linked assets
with the user's confirmed permission. Source URLs are recorded in
`public/reactions/README.md`. Side Eye / Suspicious Look uses the original game's
Skeptical Baby template.

Open **Swap meme images** below the game to choose replacement images. Local
previews stay in browser memory across rounds and retries, disappear on refresh,
and are not uploaded or included in challenge links. JPG, PNG, WebP, GIF and AVIF
are supported up to 6 MB per file; unreadable files leave the previous image intact.
Replace and Use default let you manage each preview. This is a local playtest
tool, not a public submission feature.

For permanent cleared assets, add files under `/public/reactions/` and set each
collection entry's optional `localImage` to its public path, such as
`/reactions/harold.webp`. Images are contained without cropping so visual clues
remain useful. Missing or broken images fall back to emoji with a visible name.
Images have no target-specific treatment until the round ends.
The selected answer is never marked in the initial UI or accessible labels.
Content is bundled locally for a casual game, with no anti-cheat infrastructure.
Local challenge URLs are reachable only where the local server is reachable.

### Original game

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
4. Grow the deck — 126 memes ship today (2008–2024); aim for 100+ over time so
   Daily has years of runway.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel: **New Project → import the repo**. It auto-detects Next.js — no
   config needed. Deploy.
3. Add your domain under **Settings → Domains** and point DNS as Vercel
   instructs.

## SEO & discoverability

Built in:

- **Rich metadata** ([app/layout.tsx](app/layout.tsx)) — title template,
  description, keywords, canonical URLs, Open Graph + Twitter cards, and a
  generated social card at `/api/og?home=1`.
- **Structured data (JSON-LD)** — `WebSite` + `WebApplication`/`VideoGame` in
  the layout, and an `FAQPage` on the homepage (eligible for rich results).
- **Indexable copy** — the homepage has real "what is / how to play / FAQ" text
  for crawlers, not just buttons.
- **`/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`, `/icon.svg`** —
  generated by [app/robots.ts](app/robots.ts), [app/sitemap.ts](app/sitemap.ts),
  [app/manifest.ts](app/manifest.ts), and [app/icon.svg](app/icon.svg).
- Share permalinks (`/r`) are `noindex` (infinite param combos) but still render
  a per-result OG card when posted.

The canonical domain defaults to `https://memeguessr.com`. Override per
environment with `NEXT_PUBLIC_SITE_URL` if you use a different domain.

**Do this after launch (it's what actually gets you indexed):**

1. Verify the domain in [Google Search Console](https://search.google.com/search-console)
   and submit `https://memeguessr.com/sitemap.xml`. Do the same in
   [Bing Webmaster Tools](https://www.bing.com/webmasters).
2. Share the live link on Reddit / X / Discord — social signals + backlinks are
   what rank a brand-new daily game far more than on-page tweaks.
3. Optionally add a Search Console verification `<meta>` via the `verification`
   field in `metadata` (layout).

## Next ideas (not yet built)

- A second guess axis per round (origin platform, template name).
- Themed packs (Vine era, 2010s Tumblr, COVID memes) and an endless mode.
- Auth so leaderboards/streaks follow a user across devices.
- Anti-cheat on score submission (currently a name + score POST; clamp/validate
  server-side or sign results before trusting the leaderboard).
