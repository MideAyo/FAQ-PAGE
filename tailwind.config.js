/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xxs: "280px",
      xs: "360px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      large: "1170px",
      xl: "1440px",
    },
    extend: {
      colors: {
        listColor: "#0E2254",
        bgColor: "#E9EFFC",
        textColor: "#000000",
        white: " #FCFCFC",
        greyColor: "#E5E5E5",
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
      },

      fontWeight: {
        500: ["500"],
        600: ["600"],
      },
    },
  },
  plugins: [],
};
