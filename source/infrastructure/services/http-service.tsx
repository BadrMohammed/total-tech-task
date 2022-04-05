/* eslint-disable prettier/prettier */
import axios from 'axios';
import env from '../../config/env.config';

axios.interceptors.request.use(
  (config: any) => {
    const configOptions = config;
    configOptions.baseURL = `${env.API_URL}/`;

    return config;
  },
  error => Promise.reject(error),
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};
