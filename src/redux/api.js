import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});
const TOKEN_PAYLOAD_KEY = "authorization";

const TOKEN = () => localStorage.getItem('token');

API.interceptors.request.use(function (config) {
  if (TOKEN()) {
    config.headers[TOKEN_PAYLOAD_KEY] = `Bearer ${TOKEN()}`;
  }
  return config;
});

API.interceptors.response.use(
  ({ data }) => data,
  (error) => {
    if (error?.response) {
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.href = `/}`;
        return Promise.reject(error.response);
      } else {
        return Promise.reject(error?.response?.data);
      }
    } else if (error?.message === "Network Error") {
      return Promise.reject(error);
    } else {
      return Promise.reject(error);
    }
  }
);

export default API;
