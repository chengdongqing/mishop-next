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

export interface ActionState<
  T extends Record<string, string[]> | undefined = undefined
> {
  errors?: T;
  success?: boolean;
  message?: string;
}

export type Theme = 'dark' | 'light' | 'system';
export type Locale = 'en' | 'zh-CN' | 'zh-TW' | 'ug';
