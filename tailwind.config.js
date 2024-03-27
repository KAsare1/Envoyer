/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      backgroundImage: theme => ({
        'gradient-to-45': 
            'linear-gradient(45deg, #000000, #5D5A5A)',
        // You can add more custom classes here
      }),
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond']
    }
    },
  },
  plugins: [],
}

