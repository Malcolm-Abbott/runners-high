/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 15px -8px',
      },
    },
    container: {
      center: true,
    },
    colors: {
      'light-green': '#ABD482',
      'dark-green': '#6FAB3D',
      'darker-green': '#5A8B29',
      'very-dark-green': '#004400',
      'light-gray': '#F1EDED',
      white: '#ffff',
      red: '#EF0000',
    },
  },
  plugins: [],
};
