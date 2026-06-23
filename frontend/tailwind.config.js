/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#800020',
        darkbrown: '#4A2F1A',
        darkgreen: '#1E3B2E',
      }
    },
  },
  plugins: [],
}
