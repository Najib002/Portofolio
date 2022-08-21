/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'young-gray' : '#F3F5F7',
        'old-gray' : '#F1F2F4',
        'young-blue': '#0977BE',
        'old-blue': '#005BAF',
        'old-green': '#08A524',
        'young-red': '#FF8017',
        'old-red': '#F63C52',
      },
      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [],
}
