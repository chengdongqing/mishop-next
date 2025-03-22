import { Product } from '@/app/types/product';

export interface LayoutHeaderNav {
  id: number;
  name: string;
  href?: string;
  children?: Product[];
}
