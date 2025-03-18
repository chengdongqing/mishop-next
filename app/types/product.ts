export interface Product {
  id: number;
  name: string;
  description?: string | null;
  pictureUrl: string;
  price: number;
  originalPrice?: number;
  hasMultiplePrices: boolean;
  categoryId: number;
}

export interface ProductCategory {
  id: number;
  name: string;
  pictureUrl?: string;
  children?: ProductCategory[];
}
