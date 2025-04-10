'use client';

import { DetailProduct } from '@/app/types/product';
import { createContext, PropsWithChildren, use } from 'react';

interface ProductContext {
  product: DetailProduct;
}

const ProductContext = createContext<ProductContext | null>(null);

export function ProductProvider({
  children,
  product
}: PropsWithChildren<ProductContext>) {
  return <ProductContext value={{ product }}>{children}</ProductContext>;
}

export function useProduct() {
  const ctx = use(ProductContext);
  if (!ctx) {
    throw new Error('useProduct must be used within ProductProvider');
  }
  return ctx;
}
