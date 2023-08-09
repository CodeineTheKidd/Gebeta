/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url(./assets/images/running.png)",
        'footer': "url(./assets/images/newbg6.png)"
      }
    },
  },
  plugins: [],
}

