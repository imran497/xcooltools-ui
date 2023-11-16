import axios from 'axios';

const api = axios.create({
  baseURL: `${window.location.protocol}//api.xcool.tools`
});

api.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;
