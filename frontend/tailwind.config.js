/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-gradient-to-r',
    'from-gray-300',
    'to-yellow-400',
    'from-yellow-200',
    'to-yellow-600',
    'from-amber-600',
    'to-amber-800',
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