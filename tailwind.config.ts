/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // important: true,
  corePlugins: {
    backdropOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    ringOpacity: false,
    textOpacity: false,
  },
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        harbins: ['Brandon Grotesque', 'sans-serif'],
        'sans-serif': ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
      },
      transitionProperty: {
        spacing: 'margin, padding',
        width: 'width',
      },
    },
  },
}
