// Here's custom axios instance and baseURL.

import axios, {AxiosRequestConfig, AxiosError} from 'axios';

const baseURL = 'https://rickandmortyapi.com/api';

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.log('Error Response:', error.response.data);
    } else {
      console.log('Request Error:', error.message);
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
