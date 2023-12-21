export const getBaseUrl = () => {
  return import.meta.env.VITE_APP_BASE_URL || "http://localhost:5000/api/v1";
};
