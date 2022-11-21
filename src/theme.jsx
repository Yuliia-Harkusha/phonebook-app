export const theme = Object.freeze({
  colors: {
    accent: '#11a0cf',
    hover: '#1bb1e2',
    gray: '#464444',
    lightGray: '#635050',
    orange: '#f6950d',
    light: '#f2f2f2',
    dark: '#212121',
    mainBackground: ['linear-gradient(to bottom, #c9d6ff,  #e2e2e2)'],
    tagBackground: ['linear-gradient(to bottom, #FFD194, #D1913C)'],
  },
  fontSizes: {
    small: '16px',
    medium: '20px',
    medLarge: '22px',
    large: '34px',
  },
  fonts: ['sans-serif', 'Roboto'],
  spacing: value => `${4 * value}px`,
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
  radii: {
    primary: 5,
  },
});
