import React from 'react';
// import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import ChannelList from './ChannelList';

export default {
  title: 'twitch Components|ChannelList',
  parameters: { Components: ChannelList },
};
export const standard = () => (
  <ChannelList
    channels={[
      {
        id: 1,
        name: 'test 1',
        profileAlt: 'gorgc',
        profileSrc:
          'https://static-cdn.jtvnw.net/jtv_user_pictures/gorgc-profile_image-469e05d25a1e8594-70x70.jpeg',
        channelStatus: 'online',
      },
      {
        id: 2,
        name: 'test 2',
        profileAlt: 'bulldog',
        profileSrc:
          'https://static-cdn.jtvnw.net/jtv_user_pictures/admiralbulldog-profile_image-888d5b80958e636f-150x150.jpeg',
        channelStatus: 'online',
      },
      {
        id: 3,
        name: 'test 3',
        profileAlt: 'blitz',
        profileSrc:
          'https://static-cdn.jtvnw.net/jtv_user_pictures/blitzspanks-profile_image-85fc3e71b37e7d4b-150x150.jpeg',
        channelStatus: 'online',
      },
    ]}
    margin="20px"
  ></ChannelList>
);
