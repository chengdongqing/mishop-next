import { GenderType } from '@/enums';

export interface User {
  id: number;
  name: string;
  avatarUrl: string;
  gender?: GenderType;
  phone: string;
  email?: string;
  password?: string;
}
