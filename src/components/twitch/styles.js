const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};
const fontSize = {
  "1": "5.4",
  "2": "3.6",
  "3": "2.4",
  "4": "1.8",
  "5": "1.4",
  "6": "1.2"
};
const fontWeight = {
  bold: "700",
  strong: "600",
  semiStrong: "500",
  light: "400"
};
export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};
const lineHeightTemplate = (str, size) => `${str[0]}${fontSize[size]}${str[1]}`;
const fontSizeTemplate = (str, size) =>
  `${str[0]}${fontSize[size]}rem ${str[1]}`;
const fontWeightTemplate = (str, weight) =>
  `${str[0]}${fontWeight[weight]}${str[1]}`;
export const styles = {
  lineHeight: size => `line-height: ${size}!important;`,
  fontSize: size => fontSizeTemplate`font-size: ${size}!important;`,
  fontWeight: weight => fontWeightTemplate`font-weight: ${weight}!important`
};
