import React from "react";

import "./tailwind.css";
import theme from "../renderlesskit.config.ts";
import { RenderlesskitProvider } from "../src/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },

  storySort: {
    method: "alphabetical",
    order: ["Primitives", "Forms", "Popups"],
  },
};

export const decorators = [
  (Story, context) => {
    document.body.classList.add("font-sans");

    return (
      <RenderlesskitProvider theme={theme}>
        <Story />
      </RenderlesskitProvider>
    );
  },
];
