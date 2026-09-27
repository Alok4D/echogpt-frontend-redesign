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
      fontFamily: {
        sans: ['Geist', 'Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
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
        chatter: {
          indigo: "#5B4FE1",
          deepIndigo: "#4F46E5",
          violet: "#7C3AED",
          fuchsia: "#D946EF",
          emerald: "#10B981",
          border: "#E2E8F0",
          darkBg: "#0A0D14",
          cardDark: "#111827",
        },
        brand: {
          sky: "#5B4FE1",
          cyan: "#4F46E5",
          softBlue: "#7C3AED",
          indigo: "#5B4FE1",
          lavender: "#D946EF",
          mint: "#10B981",
        }
      },
      borderRadius: {
        '2.5xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'glass': '0 10px 30px -5px rgba(91, 79, 225, 0.08), 0 4px 16px -2px rgba(15, 23, 42, 0.03)',
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'glow-primary': '0 10px 25px -3px rgba(91, 79, 225, 0.4)',
        'glow-violet': '0 10px 25px -3px rgba(124, 58, 237, 0.4)',
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
