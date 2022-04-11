module.exports = {
  purge: {
    enabled: true,
    content: [
      "./src/client/*.vue",
      "./src/client/pages/*.vue",
      "./src/client/components/*.vue",
      "./src/client/components/**/*.vue",
      "./src/client/components/**/**/*.vue",
      "./public/index.html",
    ],
  },
  darkMode: false, // or "media" or "class"
  theme: {
    colors: {
      "black": "#000000",
      "white": "#FFFFFF",
      primary: {
        DEFAULT: "#F96D01",
        thin: "#F7A100",
        light: "#FFF6EF",
      },
      danger: {
        DEFAULT: "#AD3232",
        light: "#FAE9E9",
      },
      info: {
        DEFAULT: "#297CC6",
        light: "#F2F7FF",
      },
      warning: {
        DEFAULT: "#FFFCD9",
      },
      success: {
        DEFAULT: "#4DA501",
        light: "#EDF6E5",
      },
      gray: {
        DEFAULT: "#DFE4E8",
        light: "#F9FAFC",
      },
    },
    gradientColorStops: theme => ({
      ...theme('colors'),
    }),
    backgroundColor: theme => ({
      ...theme('colors'),
      "default": "#F2F5F8",
      "blue": "#297CC6",
      "tertiary": "#BEC8D1",
    }),
    textColor: theme => ({
      ...theme('colors'),
      "default": "#333333",
      "secondary": "#959DA3",
      "tertiary": "#BEC8D1",
    }),
  },
  variants: {
    extend: {
      margin: [
        "last",
      ],
    },
  },
}
