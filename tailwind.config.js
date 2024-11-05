/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: "Oswald, ui-serif", // Adds a new `font-display` class
      },
    },

    screens: {
      xsm: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xxl: "1440px",
    },
    colors: {
      primary: "black",
      secondary: "green",
      white: "white",
    },
    spacing: {
      px: "1px",
      2: "2rem",
      0: "0",
      0.5: "0.125rem",
      1: "0.25rem",
    },
    borderRadius: {
      none: "0",
      sm: ".125rem",
      DEFAULT: ".25rem",
      lg: ".5rem",
      full: "9999px",
    },
    opacity: {
      0: "0",
      20: "0.2",
      40: "0.4",
      60: "0.6",
      80: "0.8",
      100: "1",
    },
    backgroundSize: ({ theme }) => ({
      auto: "auto",
      cover: "cover",
      contain: "contain",
      ...theme("spacing"),
    }),
    fill: {
      gray: ({ theme }) => theme("colors.gray"),
    },
    fontFamily: {
      sans: ["Lato", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
