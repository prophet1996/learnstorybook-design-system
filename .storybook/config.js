import { configure, addDecorator } from "@storybook/react";
import React from "react";
import { GlobalStyle } from "../src/shared/global";

// automatically import all files ending in *.stories.js
addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
configure(require.context("../src", true, /\.stories\.(js|mdx)$/), module);
