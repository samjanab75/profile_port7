/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        butter: "#F5C84C",
        leaf: "#A8C9A1",
        forest: "#315B45",
        cocoa: "#6B4935",
        cream: "#FFF9E9"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(65, 75, 43, 0.12)"
      }
    },
  },
  plugins: [],
};