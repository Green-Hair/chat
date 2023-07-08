/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      "colors":{
        'nav-item-text':'#333',
        'nav-item-hover':'rgba(0, 0, 0, 0.06)'
      },
      "screens":{
        'mobile':'800px'
      },
    }
  },
  plugins: []
}