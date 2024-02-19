/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors:{
        background : '#747572',
        bgHeader : '#221E22',
        bgNewsCard : '#C6D8D3',
        newsCardContent : '#231123'
      }
    },
    screens: {
      'TV': {'max': '2560px'},
      
      'large-desktop': {'max': '1600px'},

      'mid-desktop': {'max': '1200px'},

      'small-desktop': {'max': '1024px'},

      'tablet': {'max': '768px'},

      'small-tablet': {'max': '640px'},
      
      'large-mobile': {'max': '450px'},
      
      'mid-mobile': {'max': '375px'},

      'small-mobile': {'max': '325px'},
    }
  },
  plugins: [],
}

