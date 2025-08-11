/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#E6F0FF',
          DEFAULT: '#4A90E2',
          dark: '#2C5282',
        },
        secondary: {
          light: '#F0FFF4',
          DEFAULT: '#48BB78',
          dark: '#2F855A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}