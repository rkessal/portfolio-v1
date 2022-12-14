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
        redMain: "#630000",
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
