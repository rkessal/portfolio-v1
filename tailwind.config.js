/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1280px",
        },
      },
      colors: {
        redMain: {
          50: "#f7f2f2",
          100: "#efe6e6",
          200: "#d8bfbf",
          300: "#c19999",
          400: "#924d4d",
          500: "#630000",
          600: "#590000",
          700: "#4a0000",
          800: "#3b0000",
          900: "#310000",
        },
      },
      fontFamily: {
        Poppins: ["Poppins"],
        Inter: ["Inter"],
        Montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
