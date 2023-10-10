/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: {'min':'320px', 'max':'648px'},
      md: {'min':'649px', 'max':'768px'},
      lg: {'min':'769px', 'max':'976px'},
      xl: {'min':'977px', 'max':'1535px'},
    },
    extend: {},
  },
  plugins: [],
}

