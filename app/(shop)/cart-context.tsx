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
  selectedProducts: CartProduct[];
  totalCount: number;
  totalAmount: number;
  selectedCount: number;
  selectedAmount: number;
  addToCart: (product: CartProduct) => Promise<void>;
  removeFromCart: (
    product: CartProduct,
    shouldConfirm?: boolean
  ) => Promise<void>;
  modifyCount: (product: CartProduct, quantity: number) => Promise<void>;
  setChecked: (product: CartProduct, checked: boolean) => Promise<void>;
  setCheckedBatch: (checked: boolean) => Promise<void>;
  clearCart: () => Promise<void>;
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
   * 已选中的商品列表
   */
  const selectedProducts = useMemo(() => {
    return products.filter((product) => product.checked);
  }, [products]);

  function calculateCount(onlySelected: boolean = false) {
    return (onlySelected ? selectedProducts : products).reduce(
      (acc, product) => {
        return acc + product.quantity;
      },
      0
    );
  }

  function calculateAmount(onlySelected: boolean = false) {
    return (onlySelected ? selectedProducts : products).reduce(
      (acc, product) => {
        return new Decimal(product.price)
          .mul(product.quantity)
          .plus(acc)
          .toNumber();
      },
      0
    );
  }

  const totalCount = useMemo(
    () => calculateCount(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [products]
  );
  const totalAmount = useMemo(
    () => calculateAmount(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [products]
  );
  const selectedAmount = useMemo(
    () => calculateAmount(true),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedProducts]
  );
  const selectedCount = useMemo(
    () => calculateCount(true),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedProducts]
  );

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

  async function removeFromCart(product: CartProduct, shouldConfirm = true) {
    if (shouldConfirm) {
      await new Promise<void>((resolve, reject) => {
        popup.confirm('确定删除该商品吗？', {
          onOk: resolve,
          onCancel: reject
        });
      });
    }

    if (!hasLogin) {
      products.splice(products.indexOf(product), 1);
      setProducts((prev) => [...prev]);
    }

    return Promise.resolve();
  }

  function modifyCount(product: CartProduct, quantity: number): Promise<void> {
    if (!hasLogin) {
      if (quantity > 0) {
        if (!product.limits || quantity <= product.limits) {
          product.quantity = quantity;
          setProducts((prev) => [...prev]);
        } else {
          popup.alert('商品加入购物车数量超过限购数');
          return Promise.reject();
        }
      } else {
        return removeFromCart(product);
      }
    }
    return Promise.resolve();
  }

  function setChecked(product: CartProduct, checked: boolean): Promise<void> {
    if (!hasLogin) {
      product.checked = checked;
      setProducts((prev) => [...prev]);
    }
    return Promise.resolve();
  }

  function setCheckedBatch(checked: boolean): Promise<void> {
    if (!hasLogin) {
      products.forEach((product) => {
        product.checked = checked;
      });
      setProducts((prev) => [...prev]);
    }
    return Promise.resolve();
  }

  async function clearCart(): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      popup.confirm('确定清空购物车吗？', {
        onOk: resolve,
        onCancel: reject
      });
    });

    if (!hasLogin) {
      setProducts([]);
    }

    return Promise.resolve();
  }

  const contextValue: CartContext = useMemo(
    () => ({
      products,
      selectedProducts,
      totalCount,
      totalAmount,
      selectedCount,
      selectedAmount,
      addToCart,
      removeFromCart,
      modifyCount,
      setChecked,
      setCheckedBatch,
      clearCart
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [products, selectedProducts, totalCount, totalAmount]
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
