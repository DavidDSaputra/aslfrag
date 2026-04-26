import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          light: "#09090b", // Deep asphalt background
          muted: "#71717a", // Neutral grey
          accent: "#dc2626", // Racing red
          dark: "#18181b",  // Surface/card dark grey
          white: "#fafafa",
        }
      },
      fontFamily: {
        sans: ["var(--font-sora)", "sans-serif"],
        serif: ["var(--font-bebas)", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
