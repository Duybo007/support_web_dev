/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#613574",
        secondary: "#aaa6c3",
        button_primary: "#AC5FD1",
        button_secondary: "#FF7218"
      },
      backgroundImage: {
        "hero-pattern": "url('/hero.jpg')",
        "about-pattern": "url('/img-1.jpg')",
        "banner-1-pattern": "url('/banner-1.jpg')",
        "banner-2-pattern": "url('/banner-2.jpg')",
      },
    },
  },
  plugins: [],
})
