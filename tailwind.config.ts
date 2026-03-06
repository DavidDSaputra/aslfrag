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
          light: "#FFF2F2",
          muted: "#A9B4D9", // Light periwinkle
          accent: "#7886C7", // Indigo primary
          dark: "#2A3158",  // Dark navy
          white: "#ffffff",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      }
    },
  },
  plugins: [],
};
export default config;
