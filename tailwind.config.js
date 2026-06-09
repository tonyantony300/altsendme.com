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
        dark: "#0F0F0F",
      },
      fontFamily: {
        "geist": ["var(--font-geist-sans)", "sans-serif"],
        "federo": ["var(--font-libre-franklin)", "sans-serif"],
        "swear-display": ["var(--font-newsreader)", "serif"],
        "fanwood-text": ["var(--font-newsreader)", "serif"],
      },
    },
  },
  plugins: [],
};

