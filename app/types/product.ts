export interface Product {
  id: number;
  name: string;
  description?: string | null;
  pictureUrl: string;
  price: number;
  originalPrice?: number;
  hasMultipleSkus?: boolean;
  categoryId?: number;
  tags?: string[];
}

export interface ProductSku {
  id: number;
  productId: number;
  name: string;
  price: number;
  originalPrice?: number;
  limits?: number;
  pictureUrl: string;
  gallery: string[];
  attributes: SkuAttribute[];
}

export interface SkuAttribute {
  name: string;
  value: string;
}

export interface ProductCategory {
  id: number;
  name: string;
  pictureUrl?: string;
  children?: ProductCategory[];
}

export interface ProductLabel {
  id: number;
  categoryId: number;
  name: string;
  pictureUrl?: string;
}

export interface SearchProduct extends Product {
  pictureUrls: string[];
}
