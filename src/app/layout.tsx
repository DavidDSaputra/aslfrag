import type { Metadata } from "next";
import { Bebas_Neue, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MODCAST | Diecast Collector Store",
  description:
    "Toko diecast premium untuk kolektor: rilisan terbaru, skala beragam, dan detail autentik.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${sora.variable} ${bebas.variable} font-sans antialiased bg-brand-dark text-brand-ink selection:bg-brand-signal selection:text-brand-paper overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
