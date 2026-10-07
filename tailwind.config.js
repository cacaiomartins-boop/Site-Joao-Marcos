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
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(26px)" },
          "100%": { opacity: "1", transform: "none" },
        },
        kenburns: {
          "0%": { transform: "scale(1.04)" },
          "100%": { transform: "scale(1.16)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both",
        kenburns: "kenburns 22s ease-in-out infinite alternate",
        float: "float 7s ease-in-out infinite",
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
