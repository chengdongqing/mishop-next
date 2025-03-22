export interface Product {
  id: number;
  name: string;
  description?: string | null;
  pictureUrl: string;
  price: number;
  originalPrice?: number;
  hasMultipleSkus: boolean;
  categoryId?: number;
}

export interface ProductCategory {
  id: number;
  name: string;
  pictureUrl?: string;
  children?: ProductCategory[];
}

export interface ProductLabel {
  id: number;
  name: string;
  pictureUrl: string;
}