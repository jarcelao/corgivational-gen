module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    stroke: theme => ({
      'black': theme('colors.black.500')
    }),
    extend: {
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
