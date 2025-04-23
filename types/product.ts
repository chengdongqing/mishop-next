export interface Product {
  id: number;
  name: string;
  slug?: string | null;
  description?: string | null;
  pictureUrl: string;
  price: string;
  originalPrice?: string | null;
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
  price: string;
  originalPrice?: string | null;
  limits?: number | null;
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
  productSlug?: string | null;
  productName: string;
  fullName: string;
  skuId: number;
  skuName: string;
  pictureUrl: string;
  price: string;
  quantity: number;
  checked: boolean;
  subtotal?: string;
  limits?: number | null;
}

export interface RecommendedProduct
  extends Omit<CartProduct, 'id' | 'quantity' | 'checked'> {
  reviews: number;
}
