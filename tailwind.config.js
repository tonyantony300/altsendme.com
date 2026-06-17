/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f1ece6",
        foreground: "#000000",
        "footer-bg": "#000000",
        "footer-text": "#ffffff",
        "yc-red": "#DC2626",
        accent: "#E8D2B8",
        dark: "#0F0F0F",
        "section-surface": "var(--home-section-surface)",
        "section-border": "var(--home-section-border)",
        "section-text": "var(--home-section-text)",
        "section-muted": "var(--home-section-muted)",
        "section-hover": "var(--home-section-hover)",
        "card-surface": "var(--home-card-surface)",
        "card-hover": "var(--home-card-hover)",
        "accent-brown": "var(--home-accent-brown)",
      },
      fontFamily: {
        "funnel-sans": ["var(--font-funnel-sans)", "sans-serif"],
        "inter": ["var(--font-inter)", "sans-serif"],
        "federo": ["var(--font-libre-franklin)", "sans-serif"],
        "koulen": ["var(--font-koulen)", "sans-serif"],
        "swear-display": ["var(--font-newsreader)", "serif"],
        "fanwood-text": ["var(--font-newsreader)", "serif"],
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
    },
  },
  plugins: [],
};

