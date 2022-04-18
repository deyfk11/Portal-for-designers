import PropTypes from 'prop-types';
import React from 'react';

import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    circon: '#F9FAFF',
  },
  fonts: ['sans-serif', 'Gilroy'],
  breakPoints: {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

Theme.propTypes = {
  children: PropTypes.element.isRequired,
};
