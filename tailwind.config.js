/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(125, 73, 102, 1)'
      },
      backgroundColor: {
        primary: 'rgba(125, 73, 102, 0.08)'
      }
    }
  },
  plugins: []
}
