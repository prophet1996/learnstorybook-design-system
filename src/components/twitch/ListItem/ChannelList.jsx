import React from 'react';
import PropTypes from 'prop-types';
import Styled, { ThemeProvider } from 'styled-components';
import { styles } from '../styles';

const ChannelListElement = ({ className, channels }) => (
  <div>
    {channels.map((channel) => (
      <ChannelElement
        key={channel.id}
        className={className}
        channelStatus={channel.channelStatus}
      >
        <img src={channel.profileSrc} alt={channel.profileAlt} />
        <div>
          {channel.name}
          <span>{channel.currentCategory}</span>
        </div>
        <span></span>
      </ChannelElement>
    ))}
  </div>
);
const ChannelElement = Styled.div`
${styles.padding('0.5', 'left')}
& > span{
  height: 0.8em;
width: 0.8em;
background-color:${({ channelStatus }) => styles.channelStatusColor(channelStatus)} ;
border-radius: 50%;
display: inline-block;
${styles.margin('0.5', 'right')}
${styles.margin('0.5', 'left')}
justify-self: end;
}`;
const ChannelListStyled = Styled(ChannelListElement)`
   display:flex;
   justify-content:start;
   align-items:center;
   :hover {
    background:#ddd;
   }
   ${styles.padding('0.5', 'top')}
   ${styles.padding('0.5', 'bottom')}
   ${styles.padding('1.0', 'left')}
   ${styles.padding('1.0', 'right')}
   ${styles.fullWidth()}
   & >img{
    max-height:50px;
    border-radius: 50%;
    display: inline-block;
  vertical-align: top;
 
}

`;
const Card = (props) => (
  <ThemeProvider theme={{ mode: 'light' }}>
    <ChannelListStyled {...props} />
  </ThemeProvider>
);
export default Card;
ChannelListElement.propTypes = {
  children: PropTypes.node.isRequired,
  square: PropTypes.bool,
  padding: PropTypes.string,
  margin: PropTypes.string,
  background: PropTypes.string,
  className: PropTypes.string.isRequired,
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      profileSrc: PropTypes.string.isRequired,
      profileAlt: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      currentCategory: PropTypes.string.isRequired,
    }),
  ),
};
ChannelListElement.defaultProps = {
  square: false,
  padding: '',
  margin: '',
  background: 'white',
};
