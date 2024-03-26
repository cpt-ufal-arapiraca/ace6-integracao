/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-background': "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('/src/assets/images/login.png')"
      },
      colors: {
        'primary': '#0095DA',
        'gray2': '#4F4F4F',
        'gray4': '#BDBDBD'
      },
    },
  },
  plugins: [],
}