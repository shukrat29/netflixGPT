export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";
