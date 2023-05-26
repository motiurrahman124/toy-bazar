/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pt_sans: ["PT Sans", "sans-serif"],
        monoton: ["Monoton", "cursive", "sans-serif"],
      },
      colors: {
        primary: "#6AC686",
        secondary: "#e191a4",
        bgPrimary: "#B9DCC4",
        dark: "#384358",
        tSecondary: "#CED7E2",
        cPrimary: "#FEECF2",
      },
    },
  },
  plugins: [require("daisyui")],
};
