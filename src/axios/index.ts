import axios from "axios";

import { POKE_BASE_URL } from "../constants";

export const axiosInstance = axios.create({
  baseURL: POKE_BASE_URL,
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
