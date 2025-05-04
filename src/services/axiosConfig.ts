// src/services/axiosConfig.ts
import axios from "axios";
import Cookies from "js-cookie";

const API_BASE_URL = "https://ec2-13-61-12-23.eu-north-1.compute.amazonaws.com";

// Public Axios instance
export const publicAxios = axios.create({
  baseURL: API_BASE_URL,
});

// Private Axios instance with token interceptor
export const privateAxios = axios.create({
  baseURL: API_BASE_URL,
});

// Attach interceptor to add the Authorization header to private requests
privateAxios.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
