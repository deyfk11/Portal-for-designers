import axios from 'services/axios';

const getAllUsers = () => axios.get('/users')
  .then((response) => response.data);

const getUserById = (id) => axios.get(`/users/${id}`)
  .then((response) => response.data);

const deleteUser = (id) => axios.delete(`/users/${id}`)
  .then((response) => response.data);

const updateProfile = (values) => axios.put('/users/', values, { headers: { 'Content-Type': 'multipart/form-data' } })
  .then((response) => response.data);

export default { getAllUsers, deleteUser, getUserById, updateProfile };
