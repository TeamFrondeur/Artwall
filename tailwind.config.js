/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        "Space": ["Space Grostek"]
      },
      colors: {
        "Main": '#1C233D',
        "Card": '#30384D',
        "Artwall": '#FD55FD',
      }
    },
    scale: {
      '65': '0.65',
      '70': '0.70'
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
