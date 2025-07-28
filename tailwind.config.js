/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c7c7c7',
        'main-bg': '#f9fafd',
      },
    },
  },
  plugins: [],
}