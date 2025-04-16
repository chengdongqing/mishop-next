export interface Page<T> {
  page: number;
  size: number;
  total: number;
  pages: number;
  data: T[];
}

export interface PageRequest {
  page?: number;
  size?: number;
}

export interface ActionState<T extends Record<string, string[]>> {
  errors?: T;
  success?: boolean;
  message?: string;
}