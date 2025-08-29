/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0b1220",
        teal: "#00d4ff",
        gold: "#e6b800"
      },
      boxShadow: {
        glow: "0 0 30px rgba(0, 212, 255, 0.25)"
      }
    },
  },
  plugins: [],
}