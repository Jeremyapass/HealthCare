/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'gambar2' : "url('/src/Components/Gambar/gambar 2.jpg')",
        'insta' : "url('/src/Components/Gambar/ig.png')",
        'link' : "url('/src/Components/Gambar/linkedin.png')",
        'fb' : "url('/src/Components/Gambar/facebook.png')",
        'x' : "url('/src/Components/Gambar/x.png')",
        'home' :"url('/src/Components/Gambar/home.jpg')",
        'rs' :"url('/src/Components/Gambar/rs.jpg')",
      },
    },
  },
  plugins: [],
}