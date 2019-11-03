const screenSize = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};
const fontSize = {
  1: '5.4',
  2: '3.6',
  3: '2.4',
  4: '1.8',
  5: '1.4',
  6: '1.2',
  0.5: '0.5',
};
const fontWeight = {
  bold: '700',
  strong: '600',
  semiStrong: '500',
  light: '400',
};
const alignItems = {
  stretch: 'stretch',
  center: 'center',
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  baseline: 'baseline',
  initial: 'initial',
  inherit: 'inherit',
  unset: 'unset',
};

export const device = {
  mobileS: `(min-width: ${screenSize.mobileS})`,
  mobileM: `(min-width: ${screenSize.mobileM})`,
  mobileL: `(min-width: ${screenSize.mobileL})`,
  tablet: `(min-width: ${screenSize.tablet})`,
  laptop: `(min-width: ${screenSize.laptop})`,
  laptopL: `(min-width: ${screenSize.laptopL})`,
  desktop: `(min-width: ${screenSize.desktop})`,
  desktopL: `(min-width: ${screenSize.desktop})`,
};

const lineHeightTemplate = (str, size) => `${str[0]}${fontSize[size]}${str[1]}`;
const fontSizeTemplate = (str, size) => `${str[0]}${fontSize[size]}rem ${str[1]}`;
const fontWeightTemplate = (str, weight) => `${str[0]}${fontWeight[weight]}${str[1]}`;
const alignItemsTemplate = (str, align) => `${str[0]}${alignItems[align]}${str[1]}`;
const spacingTemplate = (str, type, spacing, pos) => {
  if (!pos) return `${type}: ${spacing}rem!important`;
  let position;
  try {
    position = pos.toLowerCase();
  } catch (e) {
    return e;
  }
  switch (position) {
    case 'y':
      return `${type}: ${spacing}rem 0rem!important`;
    case 'x':
      return `${type}: 0rem ${spacing}rem!important`;
    default:
      return `${type}-${position}: ${spacing}rem!important;`;
  }
};
const spaingType = { margin: 'margin', padding: 'padding' };
export const styles = {
  lineHeight: (size) => lineHeightTemplate`line-height: ${size}!important;`,
  fontSize: (size) => fontSizeTemplate`font-size: ${size}!important;`,
  fontWeight: (weight) => fontWeightTemplate`font-weight: ${weight}!important`,
  alignItems: (align) => alignItemsTemplate`align-items: ${align}!important`,
  margin: (margin, pos) => spacingTemplate`${spaingType.margin}${margin}${pos}`,
  padding: (padding, pos) => spacingTemplate`${spaingType.padding}${padding}${pos}`,
  direction: (direction, pos) => `${direction}: ${pos}px!important;`,
  uppercase: 'text-transform: uppercase!important;',
};
