import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ASLFRAG | Temukan Aroma Khas Anda",
  description: "Wewangian mewah dirancang untuk mengekspresikan identitas, keanggunan, dan rasa percaya diri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-brand-light text-brand-dark selection:bg-brand-accent selection:text-brand-light overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
