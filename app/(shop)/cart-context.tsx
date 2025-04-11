'use client';

import { CartProduct } from '@/app/types/product';
import popup from '@/components/ui/popup';
import useUpdateEffect from '@/hooks/useUpdateEffect';
import Decimal from 'decimal.js';
import {
  createContext,
  PropsWithChildren,
  use,
  useMemo,
  useState
} from 'react';

interface CartContext {
  products: CartProduct[];
  totalCount: number;
  totalAmount: number;
  addToCart: (product: CartProduct) => Promise<boolean>;
  removeFromCart: (product: CartProduct) => boolean;
  modifyCount: (product: CartProduct, count: number) => boolean;
  setChecked: (productId: number, checked: boolean) => void;
  setCheckedBatch: (productIds: number[], checked: boolean) => void;
}

const CartContext = createContext<CartContext | null>(null);

const hasLogin = false;

export function CartProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<CartProduct[]>([]);

  /**
   * 未登录时同步到local storage
   */
  useUpdateEffect(() => {
    if (!hasLogin) {
      window.localStorage.setItem('cart-products', JSON.stringify(products));
    }
  }, [products]);

  /**
   * 总数量
   */
  const totalCount = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + product.quantity;
    }, 0);
  }, [products]);

  /**
   * 总金额
   */
  const totalAmount = useMemo(() => {
    return products.reduce((acc, product) => {
      const decimal = new Decimal(product.price).mul(product.quantity);
      return acc + decimal.toNumber();
    }, 0);
  }, [products]);

  async function addToCart(product: CartProduct) {
    const cartProduct = products.find((item) => item.skuId === product.skuId);
    if (cartProduct) {
      if (
        !cartProduct.limits ||
        cartProduct.quantity + 1 <= cartProduct.limits
      ) {
        cartProduct.quantity++;
        setProducts((prev) => [...prev]);
      } else {
        popup.alert('商品加入购物车数量超过限购数');
        return false;
      }
    } else {
      setProducts((prev) => [...prev, product]);
    }

    return true;
  }

  function removeFromCart(product: CartProduct): boolean {
    console.log(product);
    return true;
  }

  function modifyCount(product: CartProduct, count: number): boolean {
    console.log(product, count);
    return true;
  }

  function setChecked(productId: number, checked: boolean) {
    console.log(productId, checked);
  }

  function setCheckedBatch(productIds: number[], checked: boolean) {
    console.log(productIds, checked);
  }

  const contextValue: CartContext = useMemo(
    () => ({
      products,
      totalCount,
      totalAmount,
      addToCart,
      removeFromCart,
      modifyCount,
      setChecked,
      setCheckedBatch
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [products, totalCount, totalAmount]
  );

  return <CartContext value={contextValue}>{children}</CartContext>;
}

export function useCartContext() {
  const ctx = use(CartContext);
  if (!ctx) {
    throw new Error('useCartContext must be used within CartProvider');
  }
  return ctx;
}
