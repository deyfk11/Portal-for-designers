import axios from 'axios';

import store from 'store/reducers/index';

const API_URL = '/api/v1';

const customAxios = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

customAxios.interceptors.request.use(
  (config) => {
    const { authorization: { token } } = store.getState();

    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

export default customAxios;
