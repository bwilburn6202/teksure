import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        teksure: {
          success: "hsl(var(--teksure-success) / <alpha-value>)",
          warning: "hsl(var(--teksure-warning) / <alpha-value>)",
          info: "hsl(var(--teksure-info) / <alpha-value>)",
        },
        zone: {
          guides: "hsl(var(--zone-guides))",
          tools: "hsl(var(--zone-tools))",
          safety: "hsl(var(--zone-safety))",
          support: "hsl(var(--zone-support))",
        },
        // Origin "Midnight Command Center" palette — exposed as Tailwind
        // utilities so we can write `bg-origin-violet` etc. directly.
        origin: {
          midnight: "hsl(var(--origin-midnight) / <alpha-value>)",
          charcoal: "hsl(var(--origin-charcoal) / <alpha-value>)",
          slate: "hsl(var(--origin-slate) / <alpha-value>)",
          ghost: "hsl(var(--origin-ghost) / <alpha-value>)",
          mist: "hsl(var(--origin-mist) / <alpha-value>)",
          ash: "hsl(var(--origin-ash) / <alpha-value>)",
          whisper: "hsl(var(--origin-whisper) / <alpha-value>)",
          ocean: "hsl(var(--origin-ocean) / <alpha-value>)",
          violet: "hsl(var(--origin-violet) / <alpha-value>)",
          lavender: "hsl(var(--origin-lavender) / <alpha-value>)",
          rose: "hsl(var(--origin-rose) / <alpha-value>)",
          indigo: "hsl(var(--origin-indigo) / <alpha-value>)",
          sky: "hsl(var(--origin-sky) / <alpha-value>)",
          "deep-sea": "hsl(var(--origin-deep-sea) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // Origin radii — explicit values from the style guide
        "origin-btn": "8px",
        "origin-card": "16px",
        "origin-large-card": "30px",
        "origin-pill": "9999px",
      },
      backgroundImage: {
        "origin-midnight":
          "linear-gradient(rgb(15, 16, 17), rgb(19, 29, 39) 18%, rgb(26, 71, 136) 37%, rgb(64, 138, 193) 69%, rgb(64, 138, 193) 102%)",
        "origin-dark-sky": "linear-gradient(135deg, rgb(43, 43, 44), rgb(19, 19, 19))",
      },
      boxShadow: {
        "origin-lg": "rgba(0, 0, 0, 0.2) 0px 18px 20px 0px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "stagger-fade": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 hsl(var(--primary) / 0)" },
          "50%": { boxShadow: "0 0 20px 4px hsl(var(--primary) / 0.15)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
