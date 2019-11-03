import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import Banner from '../Banner';
import SideNavHeader from './SideNavHeader';
import SubscribedChannelList from './SideNavHeader';
import { backgroundColor } from '../theme';
import Button from '../Button';
import { ReactComponent as CollapseIcon } from '../assets/collapse.svg';
import { styles } from '../styles';

function SideNavElement(props) {
  return (
    <div {...props}>
      <div>
        <Button secondary>
          <CollapseIcon />
        </Button>{' '}
      </div>
      <SideNavHeader open signedIn />
      {/* <ChannelList /> */}
      <SideNavHeader open />
      {/* <ChannelList /> */}
      <Banner
        heading=" Join the Twitch community!"
        content="Discover the best live streams anywhere."
        callToAction={{ text: 'Sign up', onclick: () => {} }}
      />
    </div>
  );
}
const SideNavStyled = Styled(SideNavElement)`
margin:1px;
display:flex;
padding:2rem;
flex-direction:column;
background-color:${backgroundColor}
& >div>button:nth-child(1){
  ${styles.direction('top', 0)}
  ${styles.direction('right', 0)}
  position:absolute!important;
  ${styles.margin(0.5, 'y')}
  ${styles.padding(0.5, 'y')}
  ${styles.margin(2, 'right')}
  ${styles.margin(2, 'top')}
  width: 5rem;
}
& >div>button> svg {
  height:2rem;
  width:2rem;
}
`;
const SideNav = (props) => (
  <ThemeProvider theme={{ mode: 'light' }}>
    <SideNavStyled {...props} />
  </ThemeProvider>
);
export default SideNav;
