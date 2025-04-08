/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        Black: "hsl(0, 0%, 0%)",
        Grey200: "hsl(0, 0%, 85%)",
      },
    },
    fontFamily: {
      alata: ["Alata", "sans-serif"],
      josefin: ["Josefin Sans", "sans-serif"],
    },
  },
  plugins: [],
};
