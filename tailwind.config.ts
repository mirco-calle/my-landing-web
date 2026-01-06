import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Professional color palette for strategic positioning
        navy: {
          950: "#0A0E27",
          900: "#0F172A",
          800: "#1E293B",
        },
        slate: {
          800: "#1E293B",
          700: "#334155",
          600: "#475569",
          500: "#64748B",
        },
        tech: {
          600: "#2563EB",
          500: "#3B82F6",
          400: "#60A5FA",
        },
        intelligent: {
          600: "#059669",
          500: "#10B981",
          400: "#34D399",
        },
        // Legacy colors for backward compatibility
        secondary: "#3B82F6",
        darkBg: "#0A0E27",
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(135deg, rgba(10,14,39,0.95) 0%, rgba(30,41,59,0.9) 100%)",
        "gradient-tech":
          "linear-gradient(135deg, #0A0E27 0%, #1E293B 50%, #334155 100%)",
        "gradient-accent": "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
        "gradient-intelligent":
          "linear-gradient(135deg, #10B981 0%, #059669 100%)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      screens: {
        "max-768": { max: "768px" },
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(59, 130, 246, 0.3)",
        "glow-green": "0 0 20px rgba(16, 185, 129, 0.3)",
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in": "slideIn 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },

  plugins: [],
};
export default config;
