import { LOGIN_SUCCESS, REGISTER_SUCCESS, LOGOUT } from 'store/actions/actionTypes';

const token = localStorage.getItem('token');
const initialState = {
  token,
  isLoggedIn: !!token,
  userId: null,
  roleId: null,
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
