/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./js/script.js",
    "./node_modules/apexcharts/dist/apexcharts.js",
    "./node_modules/apexcharts/dist/apexcharts.common.js",
    "./node_modules/apexcharts/dist/apexcharts.esm.js",
    "./node_modules/apexcharts/dist/apexcharts.js",
    "./node_modules/apexcharts/dist/apexcharts.min.js",
  ],
  theme: {
    extend: {},
  },
  flyonui: { 
    vendor: true
  },
  plugins: [
    require('./node_modules/flyonui/flyonui'),
    require('./node_modules/flyonui/plugin')
  ],
}

