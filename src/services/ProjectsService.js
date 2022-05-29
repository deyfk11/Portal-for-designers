import axios from 'services/axios';

const addProject = (values) => axios.post('/posts', values, { headers: { 'Content-Type': 'multipart/form-data' } })
  .then((response) => response.data);

const deleteProject = (id) => axios.delete(`/posts/${id}`);

const getProjectsById = (id) => axios.get(`/posts/users/${id}`)
  .then((response) => response.data);

const getProject = (id) => axios.get(`/posts/${id}`)
  .then((response) => response.data);

const getAllProjects = (limit, offset, sorting = 'asc') => axios.get(
  '/posts/users/',
  { params: {
    limit,
    offset,
    sorting,
  } },
)
  .then((response) => response.data);

export default { addProject, getProjectsById, deleteProject, getAllProjects, getProject };
