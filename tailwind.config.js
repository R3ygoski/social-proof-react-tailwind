/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '680px',
        xl: '1440px'
      },
      colors: {
        'veryDarkMagenta':'#502050',
        'softPink':'#ee68a4',
        'darkGrayishMagenta':'#937b92',
        'lightGrayishMagenta':'#f7f2f7',
      },
      fontFamily: {
        'leagueSpartan': ['League Spartan', 'sans-serif'],
      },
      spacing: {
        '88': '22rem',
      }
    },
  },
  plugins: [],
}

