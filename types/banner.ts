import { TargetType } from '@/enums';

export interface Banner {
  src: string;
  href: string;
  target?: TargetType;
  categoryId?: number;
}
