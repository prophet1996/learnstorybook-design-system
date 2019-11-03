import React from 'react';
// import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import Banner from './Banner';

export default {
  title: 'twitch Components|Banner',
  parameters: { Components: Banner },
};
export const standard = () => (
  <Banner
    heading=" Join the Twitch community!"
    content="Discover the best live streams anywhere."
    callToAction={{ text: 'Sign up', onclick: () => {} }}
  ></Banner>
);
