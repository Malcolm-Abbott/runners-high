/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '2rem',
      border: '2px solid rgb(171, 212, 130)',
    },
  },
  plugins: [],
};
