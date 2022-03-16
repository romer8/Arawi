module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./img/hero3.jpg')",
      },
      scale:{
        flip: '-1'
      }

    },
  },
  plugins: [],
}
