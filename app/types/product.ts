export interface Product {
  id: number;
  name: string;
  slug?: string | null;
  description?: string | null;
  pictureUrl: string;
  price: number;
  originalPrice?: number;
  hasMultipleSkus?: boolean;
  categoryId?: number;
  tags?: string[];
  staticDetails?: ProductDetailItem[];
}

export interface ProductDetailItem {
  name: string;
  children: string[];
}

export interface ProductSku {
  id: number;
  productId: number;
  name: string;
  price: number;
  originalPrice?: number;
  limits?: number | null;
  pictureUrl: string;
  gallery: string[];
  attributes: SkuAttribute[];
}

export interface SkuAttribute extends Record<string, string> {
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

export interface DetailProduct {
  id: number;
  name: string;
  slug?: string | null;
  description?: string | null;
  skus: ProductSku[];
  staticDetails: ProductDetailItem[] | null;
}

export interface CartProduct {
  id?: number;
  productId: number;
  productName: string;
  fullName: string;
  productSlug?: string | null;
  skuId: number;
  skuName: string;
  pictureUrl: string;
  price: number;
  quantity: number;
  isChecked: boolean;
  limits?: number | null;
}
