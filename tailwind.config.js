const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./*/*.html' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
      },
    },
  },
  plugins: [],
}
