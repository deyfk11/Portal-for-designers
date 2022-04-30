import ProjectsService from 'services/ProjectsService';

import { ADD_PROJECT, GET_PROJECTS_BY_ID, DELETE_PROJECT } from './actionTypes';

export const addProject = (values, navigate) => (dispatch) => (
  ProjectsService.addProject(values).then((response) => {
    dispatch({ type: ADD_PROJECT, payload: response.data });
    navigate('/profile');
  })
);

export const deleteProject = (id) => (dispatch) => (
  ProjectsService.deleteProject(id).then(() => {
    dispatch({ type: DELETE_PROJECT, payload: id });
  })
);

export const getProjectsById = (id) => (dispatch) => (
  ProjectsService.getProjectsById(id).then((response) => {
    dispatch({ type: GET_PROJECTS_BY_ID, payload: response.user_posts });
  })
);
