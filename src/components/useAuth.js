import PropTypes from 'prop-types';
import React, { createContext, useState, useContext } from 'react';

const authContext = createContext();

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return {
    isAuthenticated,
    login() {
      return new Promise((res) => {
        setIsAuthenticated(true);
        res();
      });
    },
    logout() {
      return new Promise((res) => {
        setIsAuthenticated(false);
        res();
      });
    },
  };
}

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function AuthConsumer() {
  return useContext(authContext);
}
