/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: colors.pink,
      },
    },
    fontFamily: {
      display: ["var(--font-inter)"],
      body: ["var(--font-inter)"],
    },
  },
  plugins: [],
};
