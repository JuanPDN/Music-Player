/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.html"],
  theme: {
    colors: {
      primary: "#C93B76",
      secundary: "#212936",
      "primary-2": "#E5E7EB",
      "secundary-2": "#4D5562",
      "secundary-3": "#121826a6",
    },
    fontFamily: {
      inter: ['"Inter"', "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'hero-bg': 'url("/src/assets/bg.jpg")'
      }
    },
  },
  plugins: [],
};
