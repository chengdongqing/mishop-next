'use client';

import { CartProduct } from '@/app/types/product';
import popup from '@/components/ui/popup';
import useUpdateEffect from '@/hooks/useUpdateEffect';
import Decimal from 'decimal.js';
import {
  createContext,
  PropsWithChildren,
  use,
  useEffect,
  useMemo,
  useState
} from 'react';

interface CartContext {
  products: CartProduct[];
  totalCount: number;
  totalAmount: number;
  isEmpty: boolean;
  addToCart: (product: CartProduct) => Promise<void>;
  removeFromCart: (product: CartProduct) => Promise<void>;
  modifyCount: (product: CartProduct, count: number) => Promise<void>;
  setChecked: (productId: number, checked: boolean) => Promise<void>;
  setCheckedBatch: (productIds: number[], checked: boolean) => Promise<void>;
}

const CartContext = createContext<CartContext | null>(null);

const hasLogin = false;
const cacheKey = 'cart-products';

export function CartProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<CartProduct[]>([]);

  /**
   * 初始从缓存恢复数据
   */
  useEffect(() => {
    if (hasLogin) return;

    const data = window.localStorage.getItem(cacheKey);
    if (data) {
      setProducts(JSON.parse(data) as CartProduct[]);
    }
  }, []);

  /**
   * 未登录时同步到local storage
   */
  useUpdateEffect(() => {
    if (!hasLogin) {
      window.localStorage.setItem(cacheKey, JSON.stringify(products));
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
    if (!hasLogin) {
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
          return Promise.reject();
        }
      } else {
        setProducts((prev) => [...prev, product]);
      }
    }

    return Promise.resolve();
  }

  async function removeFromCart(product: CartProduct) {
    await new Promise<void>((resolve, reject) => {
      popup.confirm('确定删除该商品吗？', {
        onOk: resolve,
        onCancel: reject
      });
    });

    if (!hasLogin) {
      products.splice(products.indexOf(product), 1);
      setProducts((prev) => [...prev]);
    }

    return Promise.resolve();
  }

  function modifyCount(product: CartProduct, count: number): Promise<void> {
    console.log(product, count);
    return Promise.resolve();
  }

  function setChecked(productId: number, checked: boolean): Promise<void> {
    console.log(productId, checked);
    return Promise.resolve();
  }

  function setCheckedBatch(
    productIds: number[],
    checked: boolean
  ): Promise<void> {
    console.log(productIds, checked);
    return Promise.resolve();
  }

  const contextValue: CartContext = useMemo(
    () => ({
      products,
      totalCount,
      totalAmount,
      isEmpty: !totalCount,
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
