import { ADD_PROJECT, GET_PROJECTS_BY_ID, DELETE_PROJECT } from 'store/actions/actionTypes';

const initialState = {
  projectsById: [],
  allProjects: [],
};

export const projectsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_PROJECT:
      return state;
    case DELETE_PROJECT:
      return {
        ...state.allProjects,
        projectsById: state.projectsById.filter((project) => project.id !== payload),
      };
    case GET_PROJECTS_BY_ID:
      return {
        ...state.allProjects,
        projectsById: payload,
      };
    default:
      return state;
  }
};
