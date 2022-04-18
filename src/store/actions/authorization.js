import jwt_decode from 'jwt-decode';

import AuthService from 'services/AuthService';

import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT } from './actionTypes';

export const login = (values) => (dispatch) => (
  AuthService.login(values)
    .then((response) => {
      const { token } = response.data;
      const decode = jwt_decode(token);

      localStorage.setItem('token', token);
      dispatch({ type: LOGIN_SUCCESS,
        payload: {
          token,
          roleId: decode.role_id,
          userId: decode.user_id,
        } });
    })
);

export const register = (values, navigate) => (dispatch) => (
  AuthService.register(values)
    .then(() => {
      dispatch({ type: REGISTER_SUCCESS });
      navigate('/login');
    })
);

export const logout = (navigate) => (dispatch) => {
  dispatch({ type: LOGOUT });
  localStorage.removeItem('token');
  navigate('/login');
};
