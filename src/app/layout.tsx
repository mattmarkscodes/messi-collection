import type { Metadata } from "next";
import "./globals.css";
import { Pinyon_Script } from "next/font/google";

const sectionScript = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-section-script",
});

export const metadata: Metadata = {
  title: "Messi — Curated Collection",
  description: "A curated Lionel Messi card collection, organized by narrative era.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={sectionScript.variable}>{children}</body>
    </html>
  );
}

