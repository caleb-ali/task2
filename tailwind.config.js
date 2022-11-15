/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'hibiscus': {
        DEFAULT: '#A02279',
        '50': '#E892CD',
        '100': '#E481C6',
        '200': '#DD5FB6',
        '300': '#D63EA7',
        '400': '#C22992',
        '500': '#A02279',
        '600': '#721856',
        '700': '#430E33',
        '800': '#150510',
        '900': '#000000'
      },
    },
    extend: {
      fontFamily: {
        Redrose: ["Red Rose", "cursive"],
      },
    },
  },
  plugins: [],
};
