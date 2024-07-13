/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        style: "#fff",
        darkslategray: {
          "100": "#454545",
          "200": "#333",
        },
        black: "#000",
        gray: {
          "100": "#828282",
          "200": "#0e0303",
          "300": "#0a0000",
        },
        darkslateblue: {
          "100": "#91619e",
          "200": "#855491",
          "300": "#894c9a",
          "400": "#6a3b78",
          "500": "#693a76",
        },
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#e0e0e0",
          "300": "#dbdbdb",
          "400": "#dadada",
          "500": "#d9d9d9",
        },
        mediumpurple: {
          "100": "#a366b3",
          "200": "#9854ab",
        },
        orchid: "#b36ec4",
        plum: {
          "100": "#b787c4",
          "200": "rgba(231, 170, 248, 0)",
        },
        linen: {
          "100": "#f2e9e4",
          "200": "rgba(242, 233, 228, 0)",
        },
        silver: "#c1c1c1",
        yellowgreen: "#7cb518",
        mistyrose: "#ffd5d5",
        red: "#f21300",
        navy: "#002194",
        dimgray: "#6d6d6d",
        lightgreen: "#a7e990",
        whitesmoke: "rgba(245, 245, 245, 0)",
      },
      spacing: {
        "spacing-sm": "32px",
      },
      fontFamily: {
        "small-text": "Inter",
        poppins: "Poppins",
        outfit: "Outfit",
      },
      borderRadius: {
        "11xl": "30px",
        lg: "18px",
        sm: "14px",
        "981xl": "1000px",
        "3xs": "10px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      "16xl": "35px",
      "2xl": "21px",
      "9xl": "28px",
      xl: "20px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "5xl": "24px",
      smi: "13px",
      "6xl": "25px",
      "11xl": "30px",
      lg: "18px",
      "3xl": "22px",
      xs: "12px",
      "21xl": "40px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
