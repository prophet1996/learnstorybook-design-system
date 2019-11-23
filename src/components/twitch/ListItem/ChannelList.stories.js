import React from "react";
// import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import ChannelList from "./ChannelList";
import { channelList } from "../mock";

export default {
  title: "twitch Components|ChannelList",
  parameters: { Components: ChannelList }
};
export const standard = () => (
  <ChannelList channels={channelList} margin="20px"></ChannelList>
);
