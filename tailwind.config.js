/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        waterbrush: ["Water Brush", "cursive"],
      },
      brightness: {
        25: ".25",
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "accent-color": "var(--accent-color)",
        "text-color": "var(--text-color)",
        "link-color": "var(--link-color)",
        "hover-color": "var(--hover-color)",
        "background-color": "var(--background-color)",
      },
    },
  },
  plugins: [],
};
