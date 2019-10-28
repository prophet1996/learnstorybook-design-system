import React from "react";
import PropTypes from "prop-types";
import { boxShadow } from "../theme";
// import icon from "../../../../assets/twitch-icon.svg";
import Styled, { ThemeProvider } from "styled-components";
/**
- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
**/
const CardElement = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const CardStyled = Styled(CardElement)`
    color: tomato;
    square:${props => props.square};
    padding:${props => props.padding};
    margin:${props => props.margin};
    background-color:${props => props.background};
    box-shadow:${boxShadow}
`;
export const Card = props => (
  <ThemeProvider theme={{ mode: "light" }}>
    <CardStyled {...props} />
  </ThemeProvider>
);

CardStyled.propTypes = {
  children: PropTypes.node.isRequired,
  square: PropTypes.bool,
  padding: PropTypes.string,
  margin: PropTypes.string,
  background: PropTypes.string
};
CardStyled.defaultProps = {
  square: false,
  padding: "",
  margin: "",
  background: "white"
};
