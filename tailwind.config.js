/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'transparent': 'transparent',
        'customColor': 'rgba(37, 37, 37, 0.61)',
        'gradientStop': '#111',
      },
    },
  },
  plugins: [],
}

