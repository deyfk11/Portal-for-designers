import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function PrivateRoute({ children, isAuthenticated, ...rest }) {
  debugger;

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={
        ({ location }) => (
          isAuthenticated
            ? (
              children
            ) : (
              <Navigate
                to={{
                  pathname: '/login',
                  state: { from: location },
                }}
              />
            ))
      }
    />
  );
}

export default PrivateRoute;
