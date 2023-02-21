const fontSizes = [
  '12px', //0
  '14px', //1
  '15px', //2
  '16px', //3
  '18px', //4
  '20px', //5
  '24px', //6
  '28px', //7
  '32px', //8
  '36px', //9
  '48px', //10
  '68px', //11
];

const lineHeights = [1.33, 1.35, 1.36, 1.37, 1.38, 1.5, 1.66];

export const theme = {
  breakpoints: ['768px', '1280px'],
  colors: {
    accent: '#F59256',
    black: ' #111111',
    gray: 'rgba(17, 17, 17, 0.6)',
    blue: '#3091EB',
    white: '#FFFFFF',
    gradient: 'linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)',
    sectionBG: '#FDF7F2',
    hightAccent: '#FF6101',
    links: '#181C27',
  },
  backgroundColor: { accent: '#FDF7F2', white: '#FFFFFF', orange: '#F59256' },
  opacity: {},
  space: [
    0, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 34, 36, 40, 42, 44, 48, 64,
    68, 88, 100, 128, 200, 256,
  ],
  fonts: {
    main: 'Manrope',
    logo: 'Poppins',
  },
  fontSizes: {
    desktop: fontSizes,
    tablet: fontSizes,
    mobile: fontSizes,
  },
  fontWeights: {
    extraLight: 200,
    light: 400,
    regular: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
  lineHeights: {
    desktop: lineHeights,
    tablet: lineHeights,
    mobile: lineHeights,
  },
  borders: {
    none: 'none',
    light: '2px solid #F59256',
    normal: '2px solid #FF6101',
    input: '1px solid rgba(245, 146, 86, 0.5)',
  },
  radii: {
    none: '0',
    sm: '4px',
    md: '20px',
    lg: '40px',
    round: '50%',
  },
  shadows: {
    regular: '7px 4px 14px rgba(49, 21, 4, 0.07)',
  },
  sizes: {
    mob: '320px',
    tablet: '768px',
    desktop: '1280px',
  },
};

export const aliases = {
  mediaQueries: {
    medium: `@media screen and (min-width: ${theme.breakpoints[0]})`,
    large: `@media screen and (min-width: ${theme.breakpoints[1]})`,
  },
  fontSizes: {
    desktop: theme.fontSizes,
    tablet: theme.fontSizes,
    mobile: theme.fontSizes,
  },
  lineHeights: {
    desktop: theme.lineHeights,
    tablet: theme.lineHeights,
    mobile: theme.lineHeights,
  },
};