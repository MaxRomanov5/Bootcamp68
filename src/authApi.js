import axios from "axios";

export const authApi = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export const setToken = (token) => {
  authApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeToken = () => {
  authApi.defaults.headers.common.Authorization = "";
};
