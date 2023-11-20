/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    backgroundImage: {
      shop: "url('./src/assets/background-shop.jpg')",
    },
    extend: {
      colors: {
        aqua: "#9BD7D1", // Side bar
        royalblue: "#325D79", // Background
        ivory: "#EFEEEE", // Background-sell
        coral: "#F9A26C", // Logo
        plum: "#D78A43", // Navbar
      },
    },
  },
  plugins: [],
};
