/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta extraída do logo D.R.A. Seguros
        cream: {
          DEFAULT: '#F7EDE4',
          100: '#FDFAF6',
          200: '#F7EDE4',
          300: '#EFE0D2',
        },
        maroon: {
          50: '#F3DDE1',
          100: '#E6BEC6',
          300: '#A5455A',
          500: '#8F2438',
          700: '#6E1526',
          800: '#5A0F1E',
          900: '#4A0E1B',
        },
        gold: {
          DEFAULT: '#C9A24B',
        },
        ink: '#2B1A1E',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Arial', 'sans-serif'],
        // Só para a assinatura textual "D.R.A. / SEGUROS" no header (ver app/layout.js).
        brand: ['var(--font-brand)', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '1180px',
      },
      keyframes: {
        'rise-in': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'rise-in': 'rise-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
};
