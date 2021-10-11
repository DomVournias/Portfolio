module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          darkest: "#1f2d3d",
          dark: "#3c4858",
          DEFAULT: "#777",
          light: "#e0e6ed",
          lightest: "#f9fafc",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
