module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 0 15px #0A2647",
      },
      colors: {
        birutua: "#0A2647",
        birusemi: "#144272",
        birulow: "#205295",
        birumuda: "#2C74B3",
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        "main-image": "url('/images/hero.jpg')",
      },
    },
  },
  plugins: [],
  "tailwindCSS.lint.cssConflict": "ignore",
};
