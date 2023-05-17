/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      '2xli': {'min': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xli': {'min': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lgi': {'min': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'mdi': {'min': '767px'},
      // => @media (max-width: 767px) { ... }

      'smi': {'min': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}
