import axios, { AxiosError, AxiosInstance } from "axios";
import { ApiError } from "@/types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api/v1";

export const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

// Interceptor de resposta para tratamento padronizado de erros
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiError>) => {
    if (error.response?.status === 401) {
      // Token expirado ou inválido — limpar sessão e redirecionar
      if (typeof window !== "undefined") {
        localStorage.removeItem("mirevion_token");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default api;
