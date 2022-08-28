/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#FFFCFA",

        darkPrimary: "#261315",

        dPrimary: "#112B3C",
        dSecondary: "#112B3C",
        dTertiary: "#33302F",

        textColor: "#323232",
        dTextColor: "#EEEEEE",
      },
      fontFamily: {
        MontserratRegular: ["MontserratRegular", "regular"],
        MontserratBold: ["MontserratBold", "bold"],
        MontserratSemiBold: ["MontserratSemiBold", "semibold"],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}
