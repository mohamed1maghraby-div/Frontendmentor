module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        bg: {
          mainBackground: "hsl(233, 47%, 7%)",
          darkDesaturatedBlue: "hsl(244, 38%, 16%)",
          softViolet: "hsl(277, 64%, 61%)",
        },
        softViolet: "hsl(277, 64%, 61%)",
        SlightlyTransparentWhite: "hsla(0, 0%, 100%, 0.75)",
        statHeadings: "hsla(0, 0%, 100%, 0.6)"
      },
    },
  },
  plugins: [],
}
