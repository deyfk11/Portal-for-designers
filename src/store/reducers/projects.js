import { ADD_PROJECT, GET_PROJECTS_BY_ID, DELETE_PROJECT, GET_ALL_PROJECTS, GET_PROJECT, UPDATE_PROJECT } from 'store/actions/actionTypes';

const initialState = {
  projectsById: [],
  allProjects: [],
  project: {},
};

export const projectsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_PROJECT:
      return state;
    case DELETE_PROJECT:
      return {
        ...state,
        projectsById: state.projectsById.filter((project) => project.id !== payload),
      };
    case GET_PROJECTS_BY_ID:
      return {
        ...state,
        projectsById: payload,
      };
    case GET_ALL_PROJECTS:
      return {
        ...state,
        allProjects: payload,
      };
    case GET_PROJECT:
      return {
        ...state,
        project: payload,
      };
    case UPDATE_PROJECT:
      return {
        ...state,
      };
    default:
      return state;
  }
};
