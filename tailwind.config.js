/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '450px',
      'lg': '1024px',
    },
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    extend: {
      fontFamily: {
        poppins: 'Poppins'
      },
      backgroundImage: {
        'header': "url(./assets/images/running.png)",
        'footer': "url(./assets/images/newbg6.png)",
        'form': "url(./assets/images/full.jpg)"
      }
    },
  },
  plugins: [],
}

