import { User } from "@/types";

export interface AdminAccount {
  id: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  role: "admin" | "manager" | "viewer";
  is_active: boolean;
}

/**
 * Lista de admins pré-cadastrados (self-hosted, sem API externa).
 * Em produção, esses dados viriam do backend com senhas hasheadas.
 */
export const ADMIN_ACCOUNTS: AdminAccount[] = [
  {
    id: "admin-001",
    email: "admin@mirevion.com",
    password: "admin123",
    first_name: "Administrador",
    last_name: "Sistema",
    role: "admin",
    is_active: true,
  },
  {
    id: "admin-002",
    email: "rh@mirevion.com",
    password: "rh123",
    first_name: "RH",
    last_name: "Equipe",
    role: "manager",
    is_active: true,
  },
  {
    id: "admin-003",
    email: "financeiro@mirevion.com",
    password: "fin123",
    first_name: "Financeiro",
    last_name: "Equipe",
    role: "viewer",
    is_active: true,
  },
];

export const findAdminByEmail = (email: string): AdminAccount | undefined =>
  ADMIN_ACCOUNTS.find((a) => a.email.toLowerCase() === email.toLowerCase() && a.is_active);

export const validateAdminPassword = (admin: AdminAccount, password: string): boolean =>
  admin.password === password;

export const adminToUser = (admin: AdminAccount): User => ({
  id: admin.id,
  email: admin.email,
  first_name: admin.first_name,
  last_name: admin.last_name,
  is_verified: true,
  is_active: admin.is_active,
});
