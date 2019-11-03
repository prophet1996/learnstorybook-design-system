import React from 'react';
import Styled from 'styled-components';
import { styles } from '../../styles';

const SideNavHeaderElement = ({
 className, open, signedIn, onClose 
}) => (
  <div className={className}>
    {open && !signedIn && <h5>Recommended Channels</h5>}
    {open && signedIn && <h5>Followed Channels</h5>}
    <div></div>
  </div>
);
const SideNavHeader = Styled(SideNavHeaderElement)`
display:flex;
flex-direction: row;
& > h5 {
    ${styles.fontSize(6)}
    ${styles.margin(1)}
    ${styles.fontWeight('strong')}
    ${styles.uppercase}
}
`;
export default SideNavHeader;

SideNavHeaderElement.propTypes = {};
SideNavHeaderElement.defaultValues = {};
