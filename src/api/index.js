import axios from 'axios';

const ApiInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 30000,
  withCredentials: false
});

export { ApiInstance };
