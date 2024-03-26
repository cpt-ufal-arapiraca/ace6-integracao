/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0095DA',
        'gray2': '#4F4F4F',
        'gray4': '#BDBDBD'
      },
    },
  },
  plugins: [],
}