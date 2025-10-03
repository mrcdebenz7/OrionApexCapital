/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#09162C",
          900: "#0B1F3B",
          800: "#102848",
          700: "#152A4E",
          50: "#EEF3F9"
        },
        maroon: {
          900: "#5A1620",
          800: "#6E1B22",
          700: "#7C1F29",
          600: "#8B2330"
        },
        neutral: {
          100: "#F5F6F8",
          300: "#E4E7EC",
          500: "#98A2B3",
          700: "#3C4655",
          900: "#0F172A"
        },
        teal: {
          400: "#2DD4BF"
        },
        gold: {
          500: "#E6B800"
        }
      },
      boxShadow: {
        card: "0 8px 24px rgba(9,22,44,0.06)",
        elev: "0 16px 40px rgba(9,22,44,0.12)"
      },
      borderRadius: {
        xl: "20px"
      }
    }
  },
  plugins: []
};
