import { TargetType } from '@/enums/banner';

export interface Banner {
  src: string;
  href: string;
  target?: TargetType;
  categoryId?: number;
}
