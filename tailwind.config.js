/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.html"],
  theme: {
    colors: {
      primary: "#C93B76",
      secundary: "#212936",
      "text-primary": "#E5E7EB",
      "text-secundary": "#4D5562",
      "text-secundary-2": "#121826a6",
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
