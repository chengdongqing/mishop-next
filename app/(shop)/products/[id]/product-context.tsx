'use client';

import { DetailProduct } from '@/types/product';
import { createContext, PropsWithChildren, use, useState } from 'react';

interface ProductContext {
  product: DetailProduct;
  pictures: string[];
  setPictures: (pictures: string[]) => void;
}

const ProductContext = createContext<ProductContext | null>(null);

export function ProductProvider({
  children,
  product
}: PropsWithChildren<{ product: DetailProduct }>) {
  const [pictures, setPictures] = useState<string[]>([]);

  return (
    <ProductContext value={{ product, pictures, setPictures }}>
      {children}
    </ProductContext>
  );
}

export function useProductContext() {
  const ctx = use(ProductContext);
  if (!ctx) {
    throw new Error('useProductContext must be used within ProductProvider');
  }
  return ctx;
}
