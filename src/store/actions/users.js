import UsersService from 'services/UsersService';

import { GET_ALL_USERS, DELETE_USER } from './actionTypes';

export const getAllUsers = () => (dispatch) => (
  UsersService.getAllUsers().then((response) => {
    dispatch({ type: GET_ALL_USERS, payload: response.data });
  })
);

export const deleteUser = (id) => (dispatch) => (
  UsersService.deleteUser(id).then(() => {
    dispatch({ type: DELETE_USER, payload: id });
  })
);