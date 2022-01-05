module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],

  darkMode: false,

  theme: {
    fontFamily: {
      code: ["Source Code Pro", "monospace"],
      nova: ["Proxima Nova Regural"],
      semiNova: ["Proxima Nova Semibold"],
      boldNova: ["Proxima Nova Bold"],
      segoeLight: ["Segoe UI Light"],
      segoeSemiLight: ["Segoe UI Semilight"],
      segoeSemiBold: ["Segoe UI SemiBold"],
      segoeBold: ["Segoe UI Bold"],
      segoe: ["Segoe UI"],
      robo: ["Robo"],
    },

    extend: {
      backgroundImage: {
        "hero-avatar": "url('/src/images/DomAvatar (1).png')",
      },
    },
    extend: {
      zIndex: {
        auto: "auto",
        n2: -2,
        n1: -1,
        0: 0,
        1: 1,
        2: 2,
      },
      animation: {
        spin: "spin 3s linear infinite",
      },
    },

    extend: {
      boxShadow: {
        "3xl": "0 0 40px rgba(8, 7, 16, 0.6)",
        glowUp: "-7px ​-50px 75px -30px   rgba(57, 0, 153, 0.5);",
        glow: "-50px 10px 90px -30px rgba(57, 0, 153, 0.5);",
      },
    },

    backgroundSize: {
      hide: "0 100%",
      halfed: "50%",
      filled: "100% 100%",
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
      lap: "1600px",
      desk: "1920px",
    },
    extend: {
      fontSize: {
        projects: "2rem",
      },
      colors: {
        secondary: "#FF0000",
        third: "#f64d28",
        fourth: "#1B998B",
        fifth: "#390099",
        sixth: "#FFBD00",
        silver: "#F3F3F3",
        graph: "#161517",
        github: "#745EC5",
        site: "#3498DB",

        gray: {
          darkest: "#1f2d3d",
          dark: "#3c4858",
          DEFAULT: "#777",
          light: "#e0e6ed",
          lightest: "#f9fafc",
          naive: "#333333",
          naiveLight: "#5c5c5c",
          naiveHover: "#7F7F7F",
          outline: "#4D4D4D",
          card: "#161517",
          cardLight: "#3c3b3d",
        },
        dark: {
          100: "#1F1F1F",
          200: "#121212",
          300: "#1E1E1E",
        },
      },
    },
  },
  variants: {
    animation: ["responsive", "motion-safe", "motion-reduce"],
    backgroundSize: ["responsive", "hover", "focus"],
    extend: {},
  },
  plugins: [
    // ...
    require("@tailwindcss/line-clamp"),
  ],
};
