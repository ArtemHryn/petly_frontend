import axios from 'axios';

axios.defaults.baseURL = 'https://arcane-everglades-20653.herokuapp.com';

export const logout = () => {
  return axios.get('/users/logout');
};
