import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
          light: "var(--primary-light)",
          glow: "var(--primary-glow)",
        },
        card: {
          DEFAULT: "var(--card-bg)",
          border: "var(--card-border)",
        },
        muted: {
          DEFAULT: "var(--muted-bg)",
          foreground: "var(--muted-foreground)",
        },
        brand: {
          sky: "#0284c7",
          cyan: "#0ea5e9",
          softBlue: "#38bdf8",
          indigo: "#6366f1",
          lavender: "#a855f7",
          mint: "#10b981",
        }
      },
      borderRadius: {
        '2.5xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'glass': '0 12px 36px -4px rgba(15, 23, 42, 0.08), 0 4px 16px -2px rgba(15, 23, 42, 0.03)',
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'glow-sky': '0 10px 25px -3px rgba(14, 165, 233, 0.4)',
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        }
      }
    },
  },
  plugins: [],
};
export default config;
