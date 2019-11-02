import React from "react";
import PropTypes from "prop-types";
import { boxShadow, accentColor } from "../theme";
// import icon from "../../../../assets/twitch-icon.svg";
import Styled, { ThemeProvider } from "styled-components";
import Card from "../Card";
import { styles } from "../styles";
const BannerElement = ({
  className,
  heading,
  content,
  callToAction,
  theme
}) => (
  <Card className={className} margin="1rem" padding="2rem">
    <Heading>{heading}</Heading> <Content>{content}</Content> {callToAction}
  </Card>
);
const Heading = Styled.p`${styles.lineHeight(3)}
${styles.fontWeight("strong")}
${styles.fontSize(3)}
`;
const Content = Styled.p`
${styles.fontSize(5)}
`;
const BannerStyled = Styled(BannerElement)`
    square:${props => props.square};
    padding:${props => props.padding};
    margin:${props => props.margin};  
    background-color:${props => props.background};
    box-shadow:${boxShadow}    
`;
const Banner = props => (
  <ThemeProvider theme={{ mode: "light" }}>
    <BannerStyled {...props} />
  </ThemeProvider>
);
export default Banner;
BannerStyled.propTypes = {
  children: PropTypes.node.isRequired,
  square: PropTypes.bool,
  padding: PropTypes.string,
  margin: PropTypes.string,
  background: PropTypes.string,
  heading: PropTypes.string,
  content: PropTypes.string
};
BannerStyled.defaultProps = {
  square: false,
  padding: "",
  margin: "",
  background: "white",
  heading: "",
  content: ""
};
