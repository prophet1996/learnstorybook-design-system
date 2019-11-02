import React from "react";
// import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import Banner from "./Banner";
export default {
  title: "twitch Components|Banner",
  parameters: { Components: Banner }
};
export const standard = props => (
  <Banner
    margin="20px"
    heading=" Join the Twitch community!"
    content="Discover the best live streams anywhere."
    callToAction="Sign Up!"
  ></Banner>
);
