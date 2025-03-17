export interface Product {
  id: number;
  name: string;
  description?: string | null;
  pictureUrl: string;
  price: number;
  originalPrice?: number;
  isLowestPrice: boolean;
}
