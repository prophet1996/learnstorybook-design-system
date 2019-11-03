import React from 'react';
import Styled, { ThemeProvider, css } from 'styled-components';
import {
  boxShadowAccent,
  accentColor,
  accentColorActive,
  accentColorHover,
} from '../theme';
import { styles } from '../styles';

export const coreButtonPrimary = css`
  background-color: ${({ secondary }) => (secondary ? "transparent" : accentColor)};
  color: #fff;
  border: none;
  outline: none;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  height: 3rem;
  user-select: none;
  white-space: nowrap;
  border-radius: 4px !important;
  vertical-align: middle !important;
  position: relative !important;
  justify-content: center !important;
  ${styles.alignItems('unset')}
  display:inline-flex;
  flex-grow: 0 !important;
  width: max-content;
  ${styles.padding(1, 'x')}
  cursor:pointer;
  :active {
    background-color: ${accentColorActive};
    box-shadow: ${boxShadowAccent};
  }
  :hover {
    background-color: ${accentColorHover};
  }
  :focus {
    box-shadow: ${boxShadowAccent};
  }
`;

const ButtonStyled = Styled.button`
${coreButtonPrimary}
`;
const Button = (props) => (
  <ThemeProvider theme={{ mode: 'light' }}>
    <ButtonStyled {...props} />
  </ThemeProvider>
);
export default Button;
