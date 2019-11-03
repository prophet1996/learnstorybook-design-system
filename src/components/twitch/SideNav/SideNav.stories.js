import React from 'react';
// import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import SideNav from './SideNav';

export default {
  title: 'twitch Components|SideNav',
  parameters: { Components: SideNav },
};

export const standard = (props) => <SideNav />;
