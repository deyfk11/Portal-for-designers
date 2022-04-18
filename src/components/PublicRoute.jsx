import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.authorization);

  if (!isLoggedIn) {
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
