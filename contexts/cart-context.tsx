'use client';

import useUpdateEffect from '@/hooks/useUpdateEffect';
import * as cartService from '@/services/cart';
import { CartProduct } from '@/types/product';
import Decimal from 'decimal.js';
import {
  createContext,
  PropsWithChildren,
  use,
  useEffect,
  useMemo,
  useState,
  useTransition
} from 'react';
import { useUserInfo } from './user-info-context';

interface CartContext {
  isLoading: boolean;
  products: CartProduct[];
  selectedProducts: CartProduct[];
  totalCount: number;
  totalAmount: number;
  selectedCount: number;
  selectedAmount: number;
  addToCart: (product: CartProduct) => Promise<void>;
  removeFromCart: (product: CartProduct) => Promise<void>;
  modifyCount: (product: CartProduct, quantity: number) => Promise<void>;
  setChecked: (product: CartProduct, checked: boolean) => Promise<void>;
  setAllChecked: (checked: boolean) => Promise<void>;
  removeSelected: () => Promise<void>;
}

const CartContext = createContext<CartContext | null>(null);

const cacheKey = 'cart-products';

export function CartProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<CartProduct[]>([]);
  const [isLoading, startTransition] = useTransition();
  const hasLogin = !!useUserInfo();

  /**
   * 获取初始数据
   */
  useEffect(() => {
    startTransition(async () => {
      let products: CartProduct[] = [];
      // 获取本地缓存的数据
      const data = window.localStorage.getItem(cacheKey);
      if (data) {
        products = JSON.parse(data) as CartProduct[];
      }

      if (hasLogin) {
        if (products.length) {
          try {
            // 同步到数据库
            await cartService.syncCart(products);
            // 清除本地缓存
            window.localStorage.removeItem(cacheKey);
          } catch (e) {
            console.error('同步购物车失败', e);
          }
        }

        // 查询数据库
        products = await cartService.findCartItems();
      }

      setProducts(products);
    });
  }, [hasLogin]);

  /**
   * 未登录时实时同步到本地缓存
   */
  useUpdateEffect(() => {
    if (!hasLogin) {
      window.localStorage.setItem(cacheKey, JSON.stringify(products));
    }
  }, [products, hasLogin]);

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
    if (hasLogin) {
      await cartService.addToCart({
        skuId: product.skuId,
        productId: product.productId,
        quantity: 1
      });

      const items = await cartService.findCartItems();
      setProducts(items);
      return;
    }

    const cartProduct = products.find((item) => item.skuId === product.skuId);
    if (cartProduct) {
      if (
        !cartProduct.limits ||
        cartProduct.quantity + 1 <= cartProduct.limits
      ) {
        cartProduct.quantity++;
        setProducts((prev) => [...prev]);
      } else {
        throw new Error('商品加入购物车数量超过限购数');
      }
    } else {
      setProducts((prev) => [...prev, product]);
    }
  }

  async function removeFromCart(product: CartProduct) {
    if (hasLogin && product.id) {
      await cartService.removeFromCart(product.id);
    }

    setProducts((prev) => {
      return prev.filter((item) => item.skuId !== product.skuId);
    });
  }

  async function modifyCount(product: CartProduct, quantity: number) {
    if (quantity > 0) {
      if (!hasLogin) {
        if (product.limits && quantity > product.limits) {
          throw new Error('商品加入购物车数量超过限购数');
        }
      } else if (product.id) {
        await cartService.modifyCartItem({
          id: product.id,
          quantity
        });
      }

      product.quantity = quantity;
      setProducts((prev) => [...prev]);
    }
  }

  async function setChecked(product: CartProduct, checked: boolean) {
    if (hasLogin && product.id) {
      await cartService.modifyCartItem({
        id: product.id,
        checked
      });
    }

    product.checked = checked;
    setProducts((prev) => [...prev]);
  }

  async function setAllChecked(checked: boolean) {
    products.forEach((product) => {
      product.checked = checked;
    });

    if (hasLogin) {
      await cartService.modifyAllChecked(checked);
    }

    setProducts((prev) => [...prev]);
  }

  async function removeSelected() {
    if (hasLogin) {
      await cartService.removeSelected();
    }

    setProducts(products.filter((item) => !item.checked));
  }

  const contextValue: CartContext = useMemo(
    () => ({
      isLoading,
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
      setAllChecked,
      removeSelected
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [products, selectedProducts, totalCount, totalAmount, hasLogin, isLoading]
  );

  return <CartContext value={contextValue}>{children}</CartContext>;
}

export function useCart() {
  const ctx = use(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within CartProvider');
  }
  return ctx;
}
