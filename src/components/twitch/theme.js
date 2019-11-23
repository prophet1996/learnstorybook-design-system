import theme from 'styled-theming';

export const accentColor = theme('mode', {
  light: '#9147ff',
  dark: '#9147ff',
});

export const accentColorActive = theme('mode', {
  light: '#5c16c5',
  dark: '#5c16c5',
});
export const accentColorHover = theme('mode', {
  light: '#772ce8',
  dark: '#772ce8',
});
export const textColor = theme('mode', {
  light: '#000',
  dark: '#fff',
});

export const backgroundColor = theme('mode', {
  light: '#efeff1',
  dark: '#222',
});

export const boxShadow = theme('mode', {
  light: '0 1px 2px rgba(0,0,0,.15)!important',
  dark: '0 1px 2px rgba(255,255,255,1)!important',
});

export const boxShadowAccent = theme('mode', {
  light: '0 0 6px 0 #772ce8',
  dark: '0 0 6px 0 #772ce8',
});

export const online = theme('mode', {
  light: '#e91916',
  dark: '#e91916',
});
