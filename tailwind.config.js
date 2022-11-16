/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      "gray": {
        "50": "#b2b2b2",
        "100": "#a8a8a8",
        "200": "#9e9e9e",
        "300": "#949494",
        "400": "#8a8a8a",
        "500": "#808080",
        "600": "#767676",
        "700": "#6c6c6c",
        "800": "#626262",
        "900": "#585858"
      },
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
