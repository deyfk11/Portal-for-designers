import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1/';

const customAxios = axios.create({
  baseURL: API_URL,
});

export default customAxios;
