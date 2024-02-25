/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '10xl': '8rem',
      },
      fontFamily: {
        montserrat: ['Montserrat'],
        'abhaya-libre': ['Abhaya Libre'],
        'alegraya-sans': ['Alegreya Sans'],
      },
      letterSpacing: {
        widest: '.25em',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
