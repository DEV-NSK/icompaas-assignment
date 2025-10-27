// src/services/api.js
import axios from "axios";
import { debugAPI } from "../utils/debug";

// const API_BASE_URL = 'http://localhost:8000';
// const API_BASE_URL = "https://icompaas-backend.onrender.com";
const API_BASE_URL = "https://icompaas-backendcode.onrender.com";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Add request debugging
api.interceptors.request.use(
  (config) => {
    debugAPI.logRequest(config);
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    debugAPI.logError(error);
    return Promise.reject(error);
  }
);

// Add response debugging
api.interceptors.response.use(
  (response) => {
    debugAPI.logResponse(response);
    return response;
  },
  async (error) => {
    debugAPI.logError(error);

    // Handle CORS errors
    if (error.message && error.message.includes("Network Error")) {
      console.error("CORS or Network Error - check backend CORS configuration");
    }

    return Promise.reject(error);
  }
);

export default api;
