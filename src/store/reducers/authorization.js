import jwt_decode from 'jwt-decode';

import { LOGIN_SUCCESS, REGISTER_SUCCESS, LOGOUT } from 'store/actions/actionTypes';

const token = localStorage.getItem('token');

const decode = (name) => {
  if (!token) return null;

  return jwt_decode(token)[name];
};

const initialState = {
  token,
  isLoggedIn: !!token,
  roleId: decode('role_id'),
  userId: decode('user_id'),
};

export const authorizationReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        token: payload.token,
        roleId: payload.roleId,
        userId: payload.userId,
        isLoggedIn: true,
      };
    case REGISTER_SUCCESS:
      return state;
    case LOGOUT:
      return {
        token: '',
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
