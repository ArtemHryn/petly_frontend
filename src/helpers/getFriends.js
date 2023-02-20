import axios from "axios";
axios.defaults.baseURL = 'https://arcane-everglades-20653.herokuapp.com';
export const getPartners = () => {
  return axios.get("/sponsors");
};
