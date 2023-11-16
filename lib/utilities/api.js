'use client';
import axios from 'axios';
import { isClient } from './common';

const api = axios.create({
  baseURL: isClient() ? `${window.location.protocol}//api.xcool.tools` : `https://api.xcool.tools`
});

api.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;
