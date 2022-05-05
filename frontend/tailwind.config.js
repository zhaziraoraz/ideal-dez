module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        slideL: "slideL 500ms linear",
        slideR: "slideR 500ms linear",
      },
      keyframes:{
        slideL: {
          "0%": {transform: "translateX(-100%)"},
          "100%": {transform: "translateX(0)"}
        },
        slideR: {
          "0%": {transform: "translateX(100%)"},
          "100%": {transform: "translateX(0)"}
        }
      },
      screens: {
        "3xl": "2000px",
      },
      fontFamily:{
        inter: "Inter"
      },
      colors:{
        yellow:'#FFB340',
        blue:'#67A4FF',
        darkGray:'#443C3C',
        lightGray: '#556987',
        bgBright: "#F7F8F9"
      }
    },
  },
  plugins: [],
}
