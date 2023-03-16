/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGreen: "#0c6f20",
        lightGreen: "#5FFC7B",
        darkGray: "#2c2c2c",
        lightGray: "#818181",
        lighterGray: "#f7f7f7",
      },
      fontFamily: {
        montserrat: [
          'Montserrat',
          'sans-serif'
        ],
      }
    },
  },
  plugins: [],
};
