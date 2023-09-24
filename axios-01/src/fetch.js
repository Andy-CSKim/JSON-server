import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

authApi.defaults.headers.common['Content-Type'] = 'application/json';

export const getUser = async () => {
  //const response = await authApi.get<QueryResponse>('query');
  try {
    const response = await authApi.get('/users');  // http://localhost:3100/users
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};