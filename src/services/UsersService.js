import axios from 'services/axios';

const getAllUsers = () => axios.get('/users')
  .then((response) => response.data);

const deleteUser = (id) => axios.delete(`/users/${id}`)
  .then((response) => response.data);

export default { getAllUsers, deleteUser };
