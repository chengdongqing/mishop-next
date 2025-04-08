import { User } from '@/app/types/user';

export interface ProductReview {
  id: number;
  user: User;
  rating: number;
  content: string | null;
  photoUrls: string[] | null;
  createdAt: Date;
}
