/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        electric: {
          50: '#fffdf1',
          100: '#fef3c7',
          200: '#f9d977',
          300: '#f5c242',
          400: '#e9a923',
          500: '#facc15',
          600: '#d79b0b',
          700: '#b67809',
        },
        graphite: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
        },
      },
      boxShadow: {
        soft: '0 20px 45px -24px rgba(15, 23, 42, 0.35)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(148,163,184,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.07) 1px, transparent 1px)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
