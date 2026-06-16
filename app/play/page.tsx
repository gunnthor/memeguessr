import { Game } from "@/components/Game";
import { dailySeed } from "@/lib/game";

export const dynamic = "force-dynamic";

export default function PlayPage({
  searchParams,
}: {
  searchParams: { mode?: string };
}) {
  const mode = searchParams.mode === "daily" ? "daily" : "random";
  // Daily mode: everyone gets the same memes today. Random: fresh each load.
  const seed = mode === "daily" ? dailySeed() : Math.floor(Math.random() * 1e9);

  return <Game seed={seed} mode={mode} />;
}
