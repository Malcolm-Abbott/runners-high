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
      'light-gray': '#F1EDED',
    },
  },
  plugins: [],
};
