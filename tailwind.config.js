const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#CEF7FF",
      secondary: "#18DCFF",
      dark: "#292929",
      // red: "#DC2626",
      white: "#FFFFFF",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    fontFamily: {
      fresca: ["fresca"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
