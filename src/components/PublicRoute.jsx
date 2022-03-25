import PropTypes from 'prop-types';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import useAuth from './useAuth';

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children || <Outlet />;
};

export default PublicRoute;

PublicRoute.defaultProps = {
  children: undefined,
};
PublicRoute.propTypes = {
  children: PropTypes.element,
};
