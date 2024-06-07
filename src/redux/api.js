import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api"
  // baseURL: "https://9115-117-221-69-202.ngrok-free.app/api",
});
const TOKEN_PAYLOAD_KEY = "authorization";

const TOKEN = () => sessionStorage.getItem("token");

API.interceptors.request.use(function (config) {
  if (TOKEN()) {
    config.headers[TOKEN_PAYLOAD_KEY] = `Bearer ${TOKEN()}`;
  }
  // config['headers']['ngrok-skip-browser-warning'] = '69420';

  return config;
});

API.interceptors.response.use(
  ({ data }) => data,
  (error) => {
    if (error?.response) {
      if (error.response.status === 401) {
        sessionStorage.clear();
        window.location.href = "/";
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
