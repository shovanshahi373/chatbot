import axios from 'axios';
import { authHelper } from '@utils/index';

const baseURL = import.meta.env.VITE_SERVER_URL;

const httpClient = axios.create({ baseURL });

httpClient.interceptors.request.use(config => {
  // send auth token here
  const token = authHelper.getAuth();
  if (token) config.headers.Authorization = `bearer ${token}`;
  return config;
});

httpClient.interceptors.response.use(config => {
  return config;
});

export { httpClient };
