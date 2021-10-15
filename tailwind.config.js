module.exports = {
  mode: "",
  purge: {
    mode: "layers",
    content: ["./src/**/*.html"],
  },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        gray: {
          darkest: "#1f2d3d",
          dark: "#3c4858",
          DEFAULT: "#777",
          light: "#e0e6ed",
          lightest: "#f9fafc",
          naive: "#333333",
          naiveHover: "#7F7F7F",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
