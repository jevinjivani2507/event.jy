/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainDark: "#181A20",
        mainBlue: "#242565",
      },
      fontFamily: {
        MontserratRegular: ["MontserratRegular", "regular"],
        MontserratBold: ["MontserratBold", "bold"],
        MontserratSemiBold: ["MontserratSemiBold", "semibold"],
      },
    },
  },
  plugins: [],
}
