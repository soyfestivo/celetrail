import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Earthy / civic palette — green for trails, deep blue for water/policy, warm accent for urgency
        forest: {
          50: "#f1f7f3",
          100: "#dcecdf",
          500: "#3f7a4d",
          600: "#2f6a3d",
          700: "#245232",
          900: "#15301d",
        },
        creek: {
          500: "#2a6b8f",
          600: "#1f5778",
          700: "#194761",
        },
        ember: {
          500: "#d97706",
          600: "#b45309",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "65ch",
      },
    },
  },
  plugins: [],
} satisfies Config;
