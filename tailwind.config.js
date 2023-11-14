/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(125, 73, 102, 1)',
        disabled: 'rgba(176, 169, 163, 1)',
        outline: 'rgba(221, 221, 221, 1)',
        black: 'rgba(30, 27, 30, 1)',
        red: 'rgba(192, 48, 48, 1)'
      },
      backgroundColor: {
        body: 'rgba(125, 73, 102, 0.08)',
        button: 'rgba(125, 73, 102, 1)',
        red: 'rgba(255, 242, 242, 1)'
      },
      fontFamily: {
        Poppins: ['Poppins, sans-serif']
      },
      borderColor: {
        primary: 'rgba(125, 73, 102, 1)'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
}
