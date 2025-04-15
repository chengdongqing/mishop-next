import { User } from '@/types/user';

export interface ProductReview {
  id: number;
  user: User;
  rating: number;
  content: string | null;
  photoUrls: string[];
  createdAt: Date;
}
