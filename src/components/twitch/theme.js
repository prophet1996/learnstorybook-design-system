import theme from "styled-theming";
export const accentColor = theme("mode", {
  light: "#6441A4",
  dark: "#6441A4"
});
export const textColor = theme("mode", {
  light: "#000",
  dark: "#fff"
});

export const backgroundColor = theme("mode", {
  light: "#fafafa",
  dark: "#222"
});

export const boxShadow = theme("mode", {
  light: "0 1px 2px rgba(0,0,0,.15)!important",
  dark: "0 1px 2px rgba(255,255,255,1)!important"
});
