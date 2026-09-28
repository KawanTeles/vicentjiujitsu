/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vj: {
          bg: '#08080a',
          surface: '#111218',
          card: '#151620',
          border: '#232433',
          red: '#dc2626',
          'red-hover': '#ef4444',
          'red-glow': 'rgba(220, 38, 38, 0.25)',
          gold: '#f59e0b',
          'gold-light': '#fbbf24',
          gray: '#9ca3af',
          light: '#f3f4f6'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 30px -5px rgba(220, 38, 38, 0.35)',
        'glow-red-lg': '0 0 50px -10px rgba(220, 38, 38, 0.5)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
