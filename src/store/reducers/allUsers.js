import { GET_ALL_USERS, DELETE_USER, GET_USER_BY_ID, UPDATE_PROFILE } from 'store/actions/actionTypes';

const initialState = {
  allUsers: [],
  userById: {},
};

export const allUsersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: payload,
      };
    case GET_USER_BY_ID:
      return {
        ...state,
        userById: payload,
      };
    case DELETE_USER:
      return {
        ...state,
        allUsers: state.allUsers.filter((user) => user.id !== payload),
      };
    case UPDATE_PROFILE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
