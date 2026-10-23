/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        waterpink: "#F8DDE5",
        deeprose: "#702B48",
        blushrose: "#E8B6C7",
        ink: "#29252A"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(112, 43, 72, 0.10)"
      }
    }
  },
  plugins: [require("flowbite/plugin")]
};