import { GET_ACCOUNT_INFO } from 'store/actions/actionTypes';

const initialState = {};

export const accountsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ACCOUNT_INFO:
      return payload;
    default:
      return state;
  }
};
