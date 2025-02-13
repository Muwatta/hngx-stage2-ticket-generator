// src/tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        heading: ['Poppins', ...fontFamily.sans],
      },
      colors: {
        'fest-primary': '#2A2D7C',
        'fest-secondary': '#F9A828',
        'fest-accent': '#E94F37',
      },
    },
  },
  plugins: [],
};
