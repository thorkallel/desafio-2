/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#111111",
        tertiary: "#222222",
        quaternary: "#333333",
        quinary: "#444444",
        senary: "#555555",
        septenary: "#666666",
        octonary: "#777777",
        nonary: "#888888",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("group-open", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.group.open ~ .${className}, .group[open] ~ .${className}, .group:popover-open ~ .${className}, .group:open ~ .${className}, .group.open > .${className}, .group[open] > .${className}, .group:popover-open > .${className}, .group:open > .${className}`;
        });
      });
    }),
    // ... otros plugins
  ],
};
