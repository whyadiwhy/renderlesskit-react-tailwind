const deepMerge = require("deepmerge");
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

// autocomplete support
/** @typedef { import('tailwindcss/defaultConfig') } DefaultConfig */
/** @typedef { import('tailwindcss/defaultTheme') } DefaultTheme */

/** @type { DefaultConfig & { theme: { extend: DefaultTheme } } } */
const renderlesskitConfig = {
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        gray: colors.gray,
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        1: ["0.25rem", { lineHeight: "0.25rem" }],
        1.5: ["0.375rem", { lineHeight: "0.375rem" }],
        2: ["0.5rem", { lineHeight: "0.5rem" }],
        xxs: ["0.625rem", { lineHeight: "0.625rem" }],
      },
      spacing: {
        em: "1em",
        6.5: "1.625rem",
        8.5: "2.125rem",
        half: "50%",
      },
      lineHeight: {
        em: "1em",
      },
      inset: {
        unset: "unset",
      },
      width: {
        fit: "fit-content",
      },
      height: {
        fit: "fit-content",
      },
      minWidth: {
        ...defaultTheme.spacing,
        half: "50%",
      },
      minHeight: {
        ...defaultTheme.spacing,
      },
      zIndex: {
        1: 1,
      },
      borderWidth: {
        1.5: "1.5px",
      },
      boxShadow: {
        thumb:
          "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
      },
      keyframes: {
        progress: {
          "0%": { left: "-40%" },
          "100%": { left: "100%" },
        },
        circularProgress: {
          "0%": {
            strokeDasharray: "1, 400",
            strokeDashoffset: "0",
          },
          "50%": {
            strokeDasharray: "400, 400",
            strokeDashoffset: "-100",
          },
          "100%": {
            strokeDasharray: "400, 400",
            strokeDashoffset: "-260",
          },
        },
      },
      animation: {
        progress: "progress 1s ease infinite normal none running",
        circularProgress:
          "circularProgress 2s ease infinite normal none running",
      },
    },
  },
  variants: {
    accessibility: [
      "lib",
      "DEFAULT",
      "responsive",
      "lib:focus-within",
      "focus-within",
      "lib:focus",
      "focus",
    ],
    alignContent: ["lib", "DEFAULT", "responsive"],
    alignItems: ["lib", "DEFAULT", "responsive"],
    alignSelf: ["lib", "DEFAULT", "responsive"],
    animation: ["lib", "DEFAULT", "responsive"],
    appearance: ["lib", "DEFAULT", "responsive"],
    backgroundAttachment: ["lib", "DEFAULT", "responsive"],
    backgroundClip: ["lib", "DEFAULT", "responsive"],
    backgroundColor: [
      "lib",
      "DEFAULT",
      "responsive",
      "dark",
      "group-hover",
      "lib:focus-within",
      "focus-within",
      "lib:hover",
      "hover",
      "lib:focus",
      "focus",
      "lib:aria-selected",
      "aria-selected",
      "lib:is-range-selection",
      "is-range-selection",
      "lib:is-selection-start",
      "is-selection-start",
      "lib:is-selection-end",
      "is-selection-end",
    ],
    backgroundImage: ["lib", "DEFAULT", "responsive"],
    backgroundOpacity: [
      "lib",
      "DEFAULT",
      "responsive",
      "group-hover",
      "lib:focus-within",
      "focus-within",
      "lib:hover",
      "hover",
      "lib:focus",
      "focus",
    ],
    backgroundPosition: ["lib", "DEFAULT", "responsive"],
    backgroundRepeat: ["lib", "DEFAULT", "responsive"],
    backgroundSize: ["lib", "DEFAULT", "responsive"],
    borderCollapse: ["lib", "DEFAULT", "responsive"],
    borderColor: [
      "lib",
      "DEFAULT",
      "responsive",
      "dark",
      "group-hover",
      "lib:focus-within",
      "focus-within",
      "lib:hover",
      "hover",
      "lib:focus",
      "focus",
    ],
    borderOpacity: [
      "lib",
      "DEFAULT",
      "responsive",
      "group-hover",
      "lib:focus-within",
      "focus-within",
      "lib:hover",
      "hover",
      "lib:focus",
      "focus",
    ],
    borderRadius: [
      "lib",
      "DEFAULT",
      "responsive",
      "lib:is-range-selection",
      "is-range-selection",
      "lib:is-selection-start",
      "is-selection-start",
      "lib:is-selection-end",
      "is-selection-end",
    ],
    borderStyle: ["lib", "DEFAULT", "responsive"],
    borderWidth: ["lib", "DEFAULT", "responsive"],
    boxShadow: [
      "lib",
      "DEFAULT",
      "responsive",
      "group-hover",
      "lib:focus-within",
      "focus-within",
      "lib:hover",
      "hover",
      "lib:focus",
      "focus",
    ],
    boxSizing: ["lib", "DEFAULT", "responsive"],
    clear: ["lib", "DEFAULT", "responsive"],
    container: ["lib", "DEFAULT", "responsive"],
    cursor: ["lib", "DEFAULT", "lib:disabled", "disabled", "responsive"],
    display: ["lib", "DEFAULT", "responsive"],
    divideColor: ["lib", "DEFAULT", "responsive", "dark"],
    divideOpacity: ["lib", "DEFAULT", "responsive"],
    divideStyle: ["lib", "DEFAULT", "responsive"],
    divideWidth: ["lib", "DEFAULT", "responsive"],
    fill: ["lib", "DEFAULT", "responsive"],
    flex: ["lib", "DEFAULT", "responsive"],
    flexDirection: ["lib", "DEFAULT", "responsive"],
    flexGrow: ["lib", "DEFAULT", "responsive"],
    flexShrink: ["lib", "DEFAULT", "responsive"],
    flexWrap: ["lib", "DEFAULT", "responsive"],
    float: ["lib", "DEFAULT", "responsive"],
    fontFamily: ["lib", "DEFAULT", "responsive"],
    fontSize: ["lib", "DEFAULT", "responsive"],
    fontSmoothing: ["lib", "DEFAULT", "responsive"],
    fontStyle: ["lib", "DEFAULT", "responsive"],
    fontVariantNumeric: ["lib", "DEFAULT", "responsive"],
    fontWeight: ["lib", "DEFAULT", "responsive"],
    gap: ["lib", "DEFAULT", "responsive"],
    gradientColorStops: [
      "lib",
      "DEFAULT",
      "responsive",
      "dark",
      "lib:hover",
      "hover",
      "lib:focus",
      "focus",
    ],
    gridAutoColumns: ["lib", "DEFAULT", "responsive"],
    gridAutoFlow: ["lib", "DEFAULT", "responsive"],
    gridAutoRows: ["lib", "DEFAULT", "responsive"],
    gridColumn: ["lib", "DEFAULT", "responsive"],
    gridColumnEnd: ["lib", "DEFAULT", "responsive"],
    gridColumnStart: ["lib", "DEFAULT", "responsive"],
    gridRow: ["lib", "DEFAULT", "responsive"],
    gridRowEnd: ["lib", "DEFAULT", "responsive"],
    gridRowStart: ["lib", "DEFAULT", "responsive"],
    gridTemplateColumns: ["lib", "DEFAULT", "responsive"],
    gridTemplateRows: ["lib", "DEFAULT", "responsive"],
    height: ["lib", "DEFAULT", "responsive"],
    inset: ["lib", "DEFAULT", "responsive"],
    justifyContent: ["lib", "DEFAULT", "responsive"],
    justifyItems: ["lib", "DEFAULT", "responsive"],
    justifySelf: ["lib", "DEFAULT", "responsive"],
    letterSpacing: ["lib", "DEFAULT", "responsive"],
    lineHeight: ["lib", "DEFAULT", "responsive"],
    listStylePosition: ["lib", "DEFAULT", "responsive"],
    listStyleType: ["lib", "DEFAULT", "responsive"],
    margin: ["lib", "DEFAULT", "responsive"],
    maxHeight: ["lib", "DEFAULT", "responsive"],
    maxWidth: ["lib", "DEFAULT", "responsive"],
    minHeight: ["lib", "DEFAULT", "responsive"],
    minWidth: ["lib", "DEFAULT", "responsive"],
    objectFit: ["lib", "DEFAULT", "responsive"],
    objectPosition: ["lib", "DEFAULT", "responsive"],
    opacity: [
      "lib",
      "DEFAULT",
      "lib:disabled",
      "disabled",
      "responsive",
      "group-hover",
      "lib:focus-within",
      "focus-within",
      "lib:hover",
      "hover",
      "lib:focus",
      "focus",
    ],
    order: ["lib", "DEFAULT", "responsive"],
    outline: [
      "lib",
      "DEFAULT",
      "responsive",
      "lib:focus-within",
      "focus-within",
      "lib:focus",
      "focus",
    ],
    overflow: ["lib", "DEFAULT", "responsive"],
    overscrollBehavior: ["lib", "DEFAULT", "responsive"],
    padding: ["lib", "DEFAULT", "responsive"],
    placeContent: ["lib", "DEFAULT", "responsive"],
    placeItems: ["lib", "DEFAULT", "responsive"],
    placeSelf: ["lib", "DEFAULT", "responsive"],
    placeholderColor: [
      "lib",
      "DEFAULT",
      "responsive",
      "dark",
      "lib:focus",
      "focus",
    ],
    placeholderOpacity: ["lib", "DEFAULT", "responsive", "lib:focus", "focus"],
    pointerEvents: ["lib", "DEFAULT", "responsive"],
    position: ["lib", "DEFAULT", "responsive"],
    resize: ["lib", "DEFAULT", "responsive"],
    ringColor: [
      "lib",
      "DEFAULT",
      "responsive",
      "dark",
      "lib:focus-within",
      "focus-within",
      "lib:focus",
      "focus",
    ],
    ringOffsetColor: [
      "lib",
      "DEFAULT",
      "responsive",
      "dark",
      "lib:focus-within",
      "focus-within",
      "lib:focus",
      "focus",
    ],
    ringOffsetWidth: [
      "lib",
      "DEFAULT",
      "responsive",
      "lib:focus-within",
      "focus-within",
      "lib:focus",
      "focus",
    ],
    ringOpacity: [
      "lib",
      "DEFAULT",
      "responsive",
      "lib:focus-within",
      "focus-within",
      "lib:focus",
      "focus",
    ],
    ringWidth: [
      "lib",
      "DEFAULT",
      "responsive",
      "lib:focus-within",
      "focus-within",
      "lib:focus",
      "focus",
    ],
    rotate: [
      "lib",
      "DEFAULT",
      "responsive",
      "lib:hover",
      "hover",
      "lib:focus",
      "focus",
    ],
    scale: [
      "lib",
      "DEFAULT",
      "responsive",
      "lib:hover",
      "hover",
      "lib:focus",
      "focus",
    ],
    skew: [
      "lib",
      "DEFAULT",
      "responsive",
      "lib:hover",
      "hover",
      "lib:focus",
      "focus",
    ],
    space: ["lib", "DEFAULT", "responsive"],
    stroke: ["lib", "DEFAULT", "responsive"],
    strokeWidth: ["lib", "DEFAULT", "responsive"],
    tableLayout: ["lib", "DEFAULT", "responsive"],
    textAlign: ["lib", "DEFAULT", "responsive"],
    textColor: [
      "lib",
      "DEFAULT",
      "responsive",
      "dark",
      "group-hover",
      "lib:focus-within",
      "focus-within",
      "lib:hover",
      "hover",
      "lib:focus",
      "focus",
      "lib:aria-selected",
      "aria-selected",
      "lib:aria-disabled",
      "aria-disabled",
      "lib:is-range-selection",
      "is-range-selection",
      "lib:is-selection-start",
      "is-selection-start",
      "lib:is-selection-end",
      "is-selection-end",
    ],
    textDecoration: [
      "lib",
      "DEFAULT",
      "responsive",
      "group-hover",
      "lib:focus-within",
      "focus-within",
      "lib:hover",
      "hover",
      "lib:focus",
      "focus",
    ],
    textOpacity: [
      "lib",
      "DEFAULT",
      "responsive",
      "group-hover",
      "lib:focus-within",
      "focus-within",
      "lib:hover",
      "hover",
      "lib:focus",
      "focus",
    ],
    textOverflow: ["lib", "DEFAULT", "responsive"],
    textTransform: ["lib", "DEFAULT", "responsive"],
    transform: ["lib", "DEFAULT", "responsive"],
    transformOrigin: ["lib", "DEFAULT", "responsive"],
    transitionDelay: ["lib", "DEFAULT", "responsive"],
    transitionDuration: ["lib", "DEFAULT", "responsive"],
    transitionProperty: ["lib", "DEFAULT", "responsive"],
    transitionTimingFunction: ["lib", "DEFAULT", "responsive"],
    translate: [
      "lib",
      "DEFAULT",
      "responsive",
      "lib:hover",
      "hover",
      "lib:focus",
      "focus",
    ],
    userSelect: ["lib", "DEFAULT", "responsive"],
    verticalAlign: ["lib", "DEFAULT", "responsive"],
    visibility: ["lib", "DEFAULT", "responsive"],
    whitespace: ["lib", "DEFAULT", "responsive"],
    width: ["lib", "DEFAULT", "responsive"],
    wordBreak: ["lib", "DEFAULT", "responsive"],
    zIndex: [
      "lib",
      "DEFAULT",
      "responsive",
      "lib:focus-within",
      "focus-within",
      "lib:focus",
      "focus",
      "active",
    ],
  },
  plugins: [
    require("./tailwindPlugins/borderColor"),
    require("./tailwindPlugins/utilities"),
    require("./tailwindPlugins/variantPlugin"),
  ],
  components: {
    extend: {
      avatar: {
        badge: {
          statuses: {
            custom: "lib:text-red-500",
          },
        },
      },
    },
  },
};

function arrayMergeFn(destinationArray, sourceArray) {
  return destinationArray.concat(sourceArray).reduce((acc, cur) => {
    if (acc.includes(cur)) return acc;
    return [...acc, cur];
  }, []);
}

function preset(tailwindConfig) {
  let purge;
  if (Array.isArray(tailwindConfig.purge)) {
    purge = {
      content: tailwindConfig.purge,
    };
  } else {
    purge = tailwindConfig.purge;
  }
  // @ts-ignore
  return deepMerge({ ...tailwindConfig, purge }, renderlesskitConfig, {
    // @ts-ignore
    arrayMerge: arrayMergeFn,
  });
}

module.exports = { preset };
