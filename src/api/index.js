import axios from 'axios';

export * from './clients';
export * from './tasks';

export const instance = axios.create({
  baseURL: API_PATH,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'ngrok-skip-browser-warning': 'true',
  },
  credentials: 'include',
});
