import { api } from "@/lib/api";
import { User } from "@/types";

export const authService = {
  login: (email: string, password: string) =>
    api.post<{ access: string; refresh: string; user: User }>("/auth/login/", { email, password }),

  logout: () => api.post("/auth/logout/", {}),

  refresh: (refresh: string) =>
    api.post<{ access: string }>("/auth/refresh/", { refresh }),

  me: () => api.get<User>("/users/me/"),
};
