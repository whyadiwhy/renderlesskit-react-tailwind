const path = require("path");
const defaultTheme = require("tailwindcss/defaultTheme");

const { preset } = require("./preset");

module.exports = preset({
  purge: [
    path.resolve(__dirname, "./src/theme/defaultTheme/**/*"),
    path.resolve(__dirname, "./src/**/stories/*.stories.@(ts|tsx)"),
    path.resolve(__dirname, "./renderlesskit.config.ts"),
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
});
