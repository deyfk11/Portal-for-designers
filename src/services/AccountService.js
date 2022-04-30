import axios from 'services/axios';

const getAccountInfo = (id) => axios.get(`/account/${id}`)
  .then((response) => response.data);

export default { getAccountInfo };
