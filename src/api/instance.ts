import axios from 'axios';

export const instance = axios.create({
  // http://api.openweathermap.org/data
  baseURL: 'http://api.openweathermap.org/data',
});
