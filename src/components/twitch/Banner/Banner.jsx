import React from "react";
import PropTypes from "prop-types";
import Styled, { ThemeProvider } from "styled-components";
import { boxShadow, textColor } from "../theme";
// import icon from "../../../../assets/twitch-icon.svg";
import Card from "../Card";
import Button from "../Button";
import { styles } from "../styles";

const BannerElement = ({ className, heading, content, callToAction }) => (
  <Card className={className} padding="2rem">
    <Heading>{heading}</Heading> <Content>{content}</Content>{" "}
    <Button type="button">{callToAction.text}</Button>
  </Card>
);

const Heading = Styled.p`${styles.lineHeight(6)}
${styles.fontWeight("strong")}
${styles.fontSize(3)}
${styles.margin(0.5, "bottom")}
color:${textColor}

`;

const Content = Styled.p`
${styles.fontSize(5)}
`;

const BannerStyled = Styled(BannerElement)`
    display:flex;
    flex-direction:column; 
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
BannerElement.propTypes = {
  children: PropTypes.node.isRequired,
  square: PropTypes.bool,
  padding: PropTypes.string,
  margin: PropTypes.string,
  background: PropTypes.string,
  heading: PropTypes.string,
  content: PropTypes.string,
  callToAction: PropTypes.shape({
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }),
  className: PropTypes.string.isRequired
};
BannerStyled.defaultProps = {
  square: false,
  padding: "",
  margin: "",
  background: "white",
  heading: "",
  content: "",
  callToAction: {
    text: "",
    onClick: e => e.stopPropogation()
  }
};
