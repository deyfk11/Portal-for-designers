import AccountService from 'services/AccountService';

import { GET_ACCOUNT_INFO } from './actionTypes';

export const getAccountInfo = (id) => (dispatch) => (
  AccountService.getAccountInfo(id).then((response) => {
    dispatch({ type: GET_ACCOUNT_INFO, payload: response });
  })
);
