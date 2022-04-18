import axios from 'services/axios';

const login = (values) => axios.post('auth/sign-in', values)
  .then((response) => response);

const register = (values) => axios.post('auth/sign-up', values)
  .then((response) => response);

export default { register, login };
