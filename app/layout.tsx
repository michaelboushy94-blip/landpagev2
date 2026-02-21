import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BRIDG | Global Partnership Infrastructure",
  description: "The Operating System for Elite Talent Representation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className={`${inter.className} bg-[#141615] text-[#E6E4DD] antialiased selection:bg-skyblue selection:text-black`}>
        <div className="noise-overlay fixed inset-0 z-[9000] pointer-events-none opacity-[0.03]" />
        <div className="fixed inset-0 bg-[#141615] -z-50" />
        {children}
      </body>
    </html>
  );
}
