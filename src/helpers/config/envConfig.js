export const getBaseUrl = () => {
  return import.meta.env.VITE_APP_BASE_URL || "https://api.ocispcbd.com/api/v1";
};
