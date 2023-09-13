/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'pink': '#e00d86',
        'green': '#b9d700',
        'blue': '#7fd9e1',
        'green2': '#4b806c',
        'pink2': '#eededf',
        'blue2': '#d3dce9'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}