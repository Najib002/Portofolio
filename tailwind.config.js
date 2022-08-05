/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'black' : '#000',
      'white' : '#fff',
      'young-blue': '#0977BE',
      'old-blue': '#005BAF',
      'old-green': '#08A524',
      'young-red': '#FF8017',
      'old-red': '#F63C52',
    },
    extend: {
      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [],
}
