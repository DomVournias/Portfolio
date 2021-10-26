module.exports = {
  mode: "",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontSize: {
        projects: "2rem",
      },
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
