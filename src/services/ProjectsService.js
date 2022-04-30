import axios from 'services/axios';

const addProject = (values) => axios.post('/posts', values, { headers: { 'Content-Type': 'multipart/form-data' } })
  .then((response) => response.data);

const deleteProject = (id) => axios.delete(`/posts/${id}`);

const getProjectsById = (id) => axios.get(`/posts/users/${id}`)
  .then((response) => response.data);

export default { addProject, getProjectsById, deleteProject };
