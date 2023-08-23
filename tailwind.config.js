/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    height: {
      "90vh": "90vh",
      "45vh": "45vh"
    },
    screens: {
      'sm': '320px',   // Small screens
      'md': '768px',   // Medium screens
      'lg': '1024px',  // Large screens
      'xl': '1280px',  // Extra-large screens
    },
  },
  plugins: [],
}

