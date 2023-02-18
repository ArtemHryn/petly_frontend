import axios from "axios";

export const getPartners = () => {
  return axios.get("/partners");
};
