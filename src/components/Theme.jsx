import PropTypes from 'prop-types';
import React from 'react';

import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    circon: '#F9FAFF',
  },
  fonts: ['sans-serif', 'Gilroy'],
  breakPoints: {
    xs: '0',
    xss: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
};
export const device = {
  xs: `(min-width: ${theme.breakPoints.xs})`,
  xss: `(min-width: ${theme.breakPoints.xss})`,
  sm: `(min-width: ${theme.breakPoints.sm})`,
  md: `(min-width: ${theme.breakPoints.md})`,
  lg: `(min-width: ${theme.breakPoints.lg})`,
  xl: `(min-width: ${theme.breakPoints.xl})`,
  xxl: `(min-width: ${theme.breakPoints.xxl})`,
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

Theme.propTypes = {
  children: PropTypes.element.isRequired,
};
