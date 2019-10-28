import React from "react";
// import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import { Card } from "./Card";
export default {
  title: "twitch Components|Card",
  parameters: { Components: Card }
};
export const standard = props => (
  <Card>
    <h1>1</h1>I am a standard default card
  </Card>
);
