import { adminToUser, findAdminByEmail, validateAdminPassword, ADMIN_ACCOUNTS } from "@/lib/auth-mock";
import { User } from "@/types";

/**
 * Auth self-hosted: autentica contra a lista local de admins (sem depender da API).
 * Suporta múltiplos admins com sessões independentes.
 */
export const authService = {
  login: async (email: string, password: string) => {
    const admin = findAdminByEmail(email);
    if (!admin) {
      throw new Error("E-mail ou senha inválidos");
    }
    if (!validateAdminPassword(admin, password)) {
      throw new Error("E-mail ou senha inválidos");
    }

    const user: User = adminToUser(admin);
    const access = `mock-access-${admin.id}-${Date.now()}`;
    const refresh = `mock-refresh-${admin.id}-${Date.now()}`;

    return {
      data: { access, refresh, user },
    };
  },

  logout: async () => {
    // Sem API para chamar — apenas limpa localStorage no componente
    return { data: {} };
  },

  refresh: async (refresh: string) => {
    const match = refresh.match(/mock-refresh-(.+)-/);
    const adminId = match?.[1];
    const admin = ADMIN_ACCOUNTS.find((a) => a.id === adminId);
    if (!admin) {
      throw new Error("Sessão expirada");
    }
    const access = `mock-access-${admin.id}-${Date.now()}`;
    return { data: { access } };
  },

  me: async () => {
    const stored = localStorage.getItem("mirevion_user");
    if (!stored) {
      throw new Error("Não autenticado");
    }
    return { data: JSON.parse(stored) as User };
  },
};
