/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        inter: "'Inter', sans-serif"
      },
      colors:{
          "main": "rgba(245, 90, 90, 1)"
      }
    },
  },
  plugins: [],
}
