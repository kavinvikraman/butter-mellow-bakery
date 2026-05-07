export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

export const apiUrl = (path: string) => {
  if (!API_BASE_URL) {
    return path.startsWith("/") ? path : `/${path}`;
  }

  return `${API_BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
};
