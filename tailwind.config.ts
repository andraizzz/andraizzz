import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        porcelain: "#F5F2EF",
        shell: "#E7D8CF",
        blush: "#D9A79A",
        ink: "#1C2228",
        obsidian: "#111111",
        stone: "#6B6B6B"
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-manrope)", "sans-serif"]
      },
      letterSpacing: {
        editorial: "0.2em"
      },
      boxShadow: {
        halo: "0 24px 80px rgba(17, 17, 17, 0.08)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(217, 167, 154, 0.28), transparent 38%)"
      }
    }
  },
  plugins: []
};

export default config;
