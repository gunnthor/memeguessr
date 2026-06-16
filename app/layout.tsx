import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MemeGuessr — When did this meme blow up?",
  description:
    "A daily meme-guessing game. Drag the timeline to guess when each meme went viral. Five rounds, share your score.",
  openGraph: {
    title: "MemeGuessr",
    description: "Guess when each meme went viral. Five rounds. Share your score.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
