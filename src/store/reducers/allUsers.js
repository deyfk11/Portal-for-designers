import { GET_ALL_USERS, DELETE_USER } from 'store/actions/actionTypes';

const initialState = [];

export const allUsersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_USERS:
      return payload;
    case DELETE_USER:
      return state.filter((user) => user.id !== payload);
    default:
      return state;
  }
};
