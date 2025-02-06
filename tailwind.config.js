const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        myGreen:'#09682a',
        myRed:'#E23237',
        myBlack: '#000008',
      }
    },
  },
  darkMode: "class",
  plugins: [heroui({
    addCommonColors: true,
  })]
}

