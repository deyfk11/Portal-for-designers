import ProjectsService from 'services/ProjectsService';

import { ADD_PROJECT, GET_PROJECTS_BY_ID, DELETE_PROJECT, GET_ALL_PROJECTS, GET_PROJECT } from './actionTypes';

export const addProject = (values, navigate, userId) => (dispatch) => (
  ProjectsService.addProject(values).then((response) => {
    dispatch({ type: ADD_PROJECT, payload: response.data });
    navigate(`/profile/${userId}`);
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

export const getProject = (id) => (dispatch) => (
  ProjectsService.getProject(id).then((response) => {
    dispatch({ type: GET_PROJECT, payload: response });
  })
);

export const getAllProjects = (limit, offset) => (dispatch) => (
  ProjectsService.getAllProjects(limit, offset).then((response) => {
    dispatch({ type: GET_ALL_PROJECTS, payload: response.posts });
  })
);
