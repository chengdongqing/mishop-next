import { TargetType } from '@/app/enums';

export interface Banner {
  src: string;
  href: string;
  target?: TargetType;
  categoryId?: number;
}
