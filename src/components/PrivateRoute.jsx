import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { roleId, isLoggedIn } = useSelector((state) => state.authorization);

  if (roleId !== 1 && !isLoggedIn) {
    return <Navigate to="/profile" />;
  }

  return children || <Outlet />;
};

export default PrivateRoute;

PrivateRoute.defaultProps = {
  children: undefined,
};
PrivateRoute.propTypes = {
  children: PropTypes.element,
};
