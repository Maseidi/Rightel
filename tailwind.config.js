/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      'xs': {'max': '575.99px'},

      'sm': {'min': '576px', 'max': '767.99px'},

      'md': {'min': '768px', 'max': '991.99px'},

      'lg': {'min': '992px', 'max': '1199.99px'},

      'xl': {'min': '1200px', 'max': '1399.99px'},

      '2xl': {'min': '1400px'},
    },
  plugins: [],  
  },
};
