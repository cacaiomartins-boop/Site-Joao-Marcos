/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#344636",
        sage: "#a9b68b",
        terra: "#c66725",
        rust: "#8a3f14",
        cream: "#f6f3ee",
        beige: "#eae6dd",
        sand: "#cfc6b7",
        ink: "#1d2a20",
        body: "#4a5a4c",
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
