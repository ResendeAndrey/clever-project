/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        primary: "#0075EB",
        favorite: "#FFD600",
        non_favorite: "#9CA3AF"
      }
    }
  },
  plugins: []
};
