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
    'from-gray-300',
    'to-slate-400',
    'from-[#800020]',
    'to-[#3B1F0B]',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Script/handwritten font - Great Vibes (like Asilia's SundayApril)
        'script': ['"Great Vibes"', 'cursive'],
        // Elegant serif - Cormorant Garamond (like Roar Africa)
        'serif': ['"Cormorant Garamond"', 'Georgia', 'serif'],
        // Clean sans-serif for body
        'sans': ['system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        // Primary Colors
        'maroon': '#800020',
        'maroon-dark': '#3B1F0B',
        'brown': '#3B1F0B',
        'beige': '#FAF5EB',
        'beige-light': '#f5f0e8',
        'gold': '#d1973e',
        'gold-light': '#c2a87d',
        'olive': '#6B8E4E',
        'olive-dark': '#556B2F',
        // Keep existing for compatibility
        'darkbrown': '#4A2F1A',
        'darkgreen': '#1E3B2E',
      }
    },
  },
  plugins: [],
}