/* eslint-disable prettier/prettier */
import axios from 'axios';
// TODO to be changes to env file
const apiUrl = '';
const publicAPIS = ['/'];

const isPublicAPI = (url: string) =>
  publicAPIS.find(endpoint => apiUrl + endpoint === url);

const interceptor = {
  setupInterceptors: async () => {
    axios.interceptors.request.use(
      (req: any) => {
        if (isPublicAPI(req.url)) {
          return req;
        }

        return req;
      },
      err => Promise.reject(err),
    );

    axios.interceptors.response.use(
      res => res,
      error => {
        if (error.response.status === 401) {
        }
        return Promise.reject(error);
      },
    );
  },
};

export default interceptor;
