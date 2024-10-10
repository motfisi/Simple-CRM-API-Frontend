import axios from 'axios';

export * from './data';

export const instance = axios.create({
  baseURL: API_PATH,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  credentials: 'include',
});
