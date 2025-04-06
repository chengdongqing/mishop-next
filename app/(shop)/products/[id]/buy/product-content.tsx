'use client';

import useToggle from '@/app/hooks/useToggle';
import { productSkusData } from '@/app/lib/placeholder-data';
import { formatAmount } from '@/app/lib/utils';
import { ProductSku } from '@/app/types/product';
import Button from '@/components/ui/button';
import { CheckCircleIcon, HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { useEffect } from 'react';
import styles from './styles.module.css';
import useSkus from './useSkus';

export default function ProductContent() {
  return (
    <div className={'flex-1'}>
      <h2 className={'text-2xl text-[#212121]'}>Xiaomi 15 Ultra</h2>
      <p className={'mt-2 text-[#b0b0b0]'}>
        徕卡1英寸主摄 | 徕卡2亿超级长焦 | 徕卡超纯光学系统 | 骁龙8至尊版移动平台
        | 6000mAh 小米金沙江电池 | 小米澎湃OS 2
      </p>
      <div className={'py-3'}>
        <span className={'text-primary text-lg'}>{formatAmount(6799)}</span>
        <span className={'ml-1.5 text-[#b0b0b0] line-through'}>
          {formatAmount(6999)}
        </span>
      </div>
      <div className={'border-primary mt-3 border-t-1'} />
      <ProductSkus items={productSkusData} onChange={() => {}} />
      <SelectedInfo />
      <div className={'mt-2.5 mb-5 flex gap-x-2.5'}>
        <AddToCartButton />
        <FavoriteButton />
      </div>
      <ServiceGuarantee />
    </div>
  );
}

function ProductSkus({
  items,
  onChange
}: {
  items: ProductSku[];
  onChange: (value?: ProductSku) => void;
}) {
  const { categories, activeSkus, activeSku, switchSku } = useSkus(items);
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
                  'hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]',
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

function SelectedInfo() {
  return (
    <div className={'my-[30] bg-[rgb(249,249,249)] p-[30]'}>
      <div className={'flex justify-between text-[rgb(97,97,97)]'}>
        <span>Xiaomi 15 Ultra 16GB+1TB 黑色</span>
        <span>{formatAmount(6799)}</span>
      </div>
      <div className={'text-primary mt-5 text-2xl'}>
        总计：{formatAmount(6799)}
      </div>
    </div>
  );
}

function AddToCartButton() {
  return <Button className={'!h-[54] !w-[300] !text-base'}>加入购物车</Button>;
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
