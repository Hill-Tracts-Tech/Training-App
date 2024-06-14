import axios from "axios";

const BASE_URL = "https://api.ocispcbd.com/api/v1";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});

export const formDataRequest = axios.create({
  baseURL: BASE_URL,
  // Add custom headers for file uploads
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// userRequest.interceptors.request.use(
//   (config) => {
//     const accessToken = localStorage.getItem("token");
//     if (accessToken) {
//       config.headers["token"] = `Bearer ${accessToken}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
