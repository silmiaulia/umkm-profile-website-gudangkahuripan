/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#7A9D54",
        headingColor: "#081e21",
        smalltextColor: "#395144"
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}