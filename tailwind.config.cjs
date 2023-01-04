/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

//! Colors
const constants = {
  green: '#008d64',
  'dark-green': '#006044',
  'light-green': '#e6f2ef',
  white: '#ffffff',
  black: '#222222',
  red: '#f23c3d',
  'light-gray': '#e8e7e3',
  'light-brown': '#a49b8f'
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: colors.transparent,
      ...constants
    },
    extend: {},
  },
  plugins: [],
}
