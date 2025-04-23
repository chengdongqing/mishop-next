import { GenderType } from '@/enums/user';

export interface User {
  id: number;
  name: string;
  avatarUrl: string;
  gender?: GenderType | null;
  phone: string;
  email?: string | null;
  password?: string | null;
}

export interface ShippingAddress {
  id: number;
  userId: number;
  recipientName: string;
  phoneNumber: string;
  city: string;
  address: string;
  label?: string | null;
}
