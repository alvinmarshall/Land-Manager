import axios from "axios";

export const setTokenHeader = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return;
  }
  delete axios.defaults.headers.common["Authorization"];
};

export const setBaseUrl = () => {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
};
