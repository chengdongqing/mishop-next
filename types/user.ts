import { GenderType } from '@/enums';

export interface User {
  id: number;
  name: string;
  avatarUrl: string;
  gender?: GenderType | null;
  phone: string;
  email?: string | null;
  password?: string | null;
}
