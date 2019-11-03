import React from 'react';
// import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import Button from './Button';

export default {
  title: 'twitch Components|Button',
  parameters: { Components: Button },
};
export const standard = () => <Button >Click me</Button>;
