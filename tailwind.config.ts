import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#111827",
          accent: "#8b5e34", // コーヒーっぽいアクセント
        },
      },
      fontFamily: {
        display: ["ui-sans-serif", "system-ui", "-apple-system", "Inter", "Noto Sans JP", "sans-serif"],
      },
      boxShadow: {
        soft: "0 6px 24px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
} satisfies Config;