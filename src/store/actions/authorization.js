import jwt_decode from 'jwt-decode';

import AuthService from 'services/AuthService';

import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT } from './actionTypes';

export const login = (values) => (dispatch) => (
  AuthService.login(values)
    .then((response) => {
      const { access_token, refresh_token } = response.data;
      const decode = jwt_decode(access_token);

      localStorage.setItem('token', access_token);
      dispatch({ type: LOGIN_SUCCESS,
        payload: {
          token: access_token,
          refresh: refresh_token,
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
