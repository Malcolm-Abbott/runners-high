/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '2rem',
    },
    colors: {
      'light-green': '#ABD482',
      'dark-green': '#6FAB3D',
      'darker-green': '#5A8B29',
      'very-dark-green': '#004400',
      'light-gray': '#F1EDED',
      white: '#ffff',
    },
  },
  plugins: [],
};
