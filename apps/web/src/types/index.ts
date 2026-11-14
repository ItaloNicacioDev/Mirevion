export interface ApiError {
  detail: string;
  code?: string;
}

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  is_verified: boolean;
  is_active: boolean;
}

export interface Organization {
  id: string;
  name: string;
  cnpj: string;
  is_active: boolean;
}
