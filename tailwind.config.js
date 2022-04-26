const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#0079D1',
        'gray-70': '#f7f7f7'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'red-hat-display': ['"Red Hat Display"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('http://localhost:3000/assets/images/LENA_WEBSITE_IMAGES/background.jpeg')",
        'small-pattern': "url('http://localhost:3000/assets/images/LENA_WEBSITE_IMAGES/back.jpeg')",
        'reverse-pattern': "url('http://localhost:3000/assets/images/LENA_WEBSITE_IMAGES/back (copy).jpeg')",
      },
      height: {
        '100': '450px'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      width: ["responsive", "hover", "focus"],
      margin: ["hover"]
    },
  },
  plugins: [],
}
