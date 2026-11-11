import type { Metadata } from "next";
import CursedCasting from "@/components/CursedCasting";
import { parseChallenge } from "@/lib/cursed-casting";

export const metadata: Metadata = {
  title: "Cursed Casting — wedding prototype",
  description: "Staff this wedding. Four hires. No takebacks.",
  alternates: { canonical: "/prototype/cursed-casting" },
  robots: { index: false, follow: false },
};

export default function CursedCastingPage({ searchParams }: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const challenge = parseChallenge(searchParams.seed, searchParams.v);
  return <CursedCasting key={`${challenge.seed}:${challenge.usedFallback}`} initialSeed={challenge.seed} usedFallback={challenge.usedFallback} />;
}
