/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "bgcolor":"#F2F2F2",
        "secondary":"#9772FB",
        "primary":"#764AF1"
      }
    },
  },
  plugins: [],
}