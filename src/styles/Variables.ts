import { css } from 'styled-components';

const Variables = css`
  :root {
    // Font
    --font-main: 'Comfortaa', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    --font-secondary: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    --font-third: 'Bebas Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;

    // Font size
    --fz-xxs: 10px;
    --fz-xs: 12px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;

    // General Colors
    --white: #fff;
    --black: #000;
    --gray: #7f7f7f;

    // Default Colors
    --brownDark: #4b1c14;
    --brownLight: #f5b575;
    --grayLight: #d9d9d9;
    --grayMedium: #c5c5c5;

    // Other
    --max-width: 1500px;
    --transition: all 0.25s ease-in-out;
  }
`;

export default Variables;
