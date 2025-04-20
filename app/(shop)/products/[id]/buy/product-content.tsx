'use client';

import Button from '@/components/ui/button';
import popup from '@/components/ui/popup';
import { useCart } from '@/contexts/cart-context';
import { useProduct } from '@/contexts/product-context';
import useToggle from '@/hooks/useToggle';
import { formatAmount } from '@/lib/utils';
import { DetailProduct, ProductSku } from '@/types/product';
import { CheckCircleIcon, HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import styles from './styles.module.css';
import useSkus from './useSkus';

export default function ProductContent() {
  const { product, setPictures } = useProduct();
  const [sku, setSku] = useState<ProductSku>();
  const router = useRouter();

  const fullName = [product.name, sku?.name].join(' ');

  if (!product.skus.length) {
    router.replace('/404');
  }

  return (
    <div className={'flex-1'}>
      <h2 className={'text-2xl text-[#212121]'}>{product.name}</h2>
      {!!product.description && (
        <p className={'mt-2 text-[#b0b0b0]'}>{product.description}</p>
      )}
      <div className={'py-3'}>
        <span className={'text-primary text-lg'}>
          {formatAmount(sku?.price)}元
        </span>
        {!!sku?.originalPrice && sku.originalPrice > sku.price && (
          <span className={'ml-1.5 text-[#b0b0b0] line-through'}>
            {formatAmount(sku.originalPrice)}元
          </span>
        )}
      </div>
      <div className={'border-primary mt-3 border-t-1'} />
      <ProductSkus
        skus={product.skus}
        onChange={(sku) => {
          setSku(sku);
          setPictures(sku?.gallery || []);
        }}
      />
      <SelectedInfo name={fullName} amount={sku?.price} />
      <div className={'mt-2.5 mb-5 flex gap-x-2.5'}>
        <AddToCartButton product={product} name={fullName} sku={sku!} />
        <FavoriteButton />
      </div>
      <ServiceGuarantee />
    </div>
  );
}

function ProductSkus({
  skus,
  onChange
}: {
  skus: ProductSku[];
  onChange: (value?: ProductSku) => void;
}) {
  const { categories, activeSkus, activeSku, switchSku } = useSkus(skus);
  useEffect(() => {
    onChange(activeSku);
  }, [activeSku, onChange]);

  return (
    <div>
      {categories.map((item) => (
        <div key={item.name} className={'mt-[26]'}>
          <div className={'mb-3 text-lg'}>选择{item.name}</div>
          <div className={'grid grid-cols-2 gap-3'}>
            {item.children.map((item1) => (
              <div
                key={item1}
                className={clsx(
                  'flex h-[44] cursor-pointer items-center justify-center border-1 text-base duration-200 ease-in-out select-none',
                  'hover:text-primary hover:border-[var(--color-primary)]',
                  activeSkus[item.name] === item1
                    ? 'text-primary border-[var(--color-primary)]'
                    : 'border-primary text-[#757575]'
                )}
                onClick={() => switchSku(item.name, item1)}
              >
                {item1}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function SelectedInfo({ name, amount }: { name?: string; amount?: number }) {
  return (
    <div className={'my-[30] bg-[rgb(249,249,249)] p-[30]'}>
      <div className={'flex justify-between text-[rgb(97,97,97)]'}>
        <span>{name}</span>
        <span>{formatAmount(amount)}元</span>
      </div>
      <div className={'text-primary mt-5 text-2xl'}>
        总计：{formatAmount(amount)}元
      </div>
    </div>
  );
}

function AddToCartButton({
  product,
  name,
  sku
}: {
  product: DetailProduct;
  name: string;
  sku: ProductSku;
}) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      loading={isPending}
      className={'!h-[54] !w-[300] !text-base'}
      onClick={() => {
        startTransition(async () => {
          try {
            await addToCart({
              productId: product.id,
              productSlug: product.slug,
              productName: product.name,
              fullName: name,
              skuId: sku.id,
              skuName: sku.name,
              price: sku.price,
              pictureUrl: sku.pictureUrl,
              quantity: 1,
              checked: true,
              limits: sku.limits
            });
            router.push(`/cart/success/${encodeURIComponent(name)}`);
          } catch (e) {
            if (e instanceof Error) {
              popup.alert(e.message);
            }
          }
        });
      }}
    >
      加入购物车
    </Button>
  );
}

function FavoriteButton() {
  const [liked, toggle] = useToggle();

  return (
    <Button className={'!h-[54] !w-[142] !text-base'} gray onClick={toggle}>
      {liked ? (
        <>
          <SolidHeartIcon className={'mr-1 w-5.5 text-[var(--color-error)]'} />
          <SolidHeartIcon
            className={clsx(
              'mr-1 w-[60] text-[var(--color-error)]',
              styles.animation
            )}
          />
        </>
      ) : (
        <HeartIcon className={'mr-1 w-5.5'} />
      )}
      喜欢
    </Button>
  );
}

function ServiceGuarantee() {
  return (
    <div className={'mt-5 mb-2.5 flex gap-4'}>
      {['7天无理由退货', '7天价格保护'].map((item) => (
        <div key={item} className={'flex items-center text-[rgb(176,176,176)]'}>
          <CheckCircleIcon className={'mr-1 w-6'} />
          {item}
        </div>
      ))}
    </div>
  );
}
