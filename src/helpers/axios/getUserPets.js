import axios from 'axios';

axios.defaults.baseURL = 'https://arcane-everglades-20653.herokuapp.com';

export const getUserPets = () => {
  return axios.get('/userPets');
};
