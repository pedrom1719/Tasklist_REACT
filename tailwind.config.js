/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Inter', 'Rubik', 'sans-serif', 'ui-sans-serif', 'system-ui'],
    }
  },
  plugins: [],
}

