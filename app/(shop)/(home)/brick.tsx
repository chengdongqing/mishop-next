'use client';

import { buildProductUrl, formatAmount } from '@/app/lib/utils';
import { Banner } from '@/app/types/banner';
import { Product } from '@/app/types/product';
import Space from '@/components/ui/space';
import {
  ArrowRightCircleIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './styles.module.css';

interface BrickProps {
  name: string;
  promotions: Banner[];
  tabs: BrickTab[];
}

interface BrickTab {
  name?: string;
  categoryId?: number;
  products: Product[];
}

export default function Brick({ name, tabs, promotions }: BrickProps) {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className={styles.brick}>
      <Header
        title={name}
        tabs={tabs}
        current={currentTab}
        onChange={setCurrentTab}
      />
      <div className={'flex'}>
        <CategoryPromotions promotions={promotions} />
        <CategoryProducts tabs={tabs} current={currentTab} />
      </div>
    </div>
  );
}

function Header({
  title,
  tabs,
  current,
  onChange
}: {
  title: string;
  tabs: BrickTab[];
  current: number;
  onChange: (index: number) => void;
}) {
  return (
    <div className={styles.header}>
      <div className={styles.title}>{title}</div>
      <div className={styles.more}>
        {tabs.length > 1 ? (
          <div className={styles.tabs}>
            {tabs.map((tab, index) => (
              <div
                key={tab.name}
                className={clsx(
                  styles.tab_item,
                  index === current && styles.active
                )}
                onMouseEnter={() => {
                  onChange(index);
                }}
              >
                {tab.name}
              </div>
            ))}
          </div>
        ) : (
          <Link
            href={`/search?categoryId=${tabs[0].categoryId}`}
            className={styles.more_link}
          >
            查看更多
            <span className={styles.icon}>
              <ChevronRightIcon className={'w-3'} />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}

function CategoryPromotions({ promotions }: { promotions: Banner[] }) {
  return (
    <div className={styles.banners}>
      {promotions.slice(0, 2).map((item) => (
        <Link
          key={item.src}
          href={item.href}
          target={item.target}
          className={styles.banner_item}
        >
          <Image
            width={234}
            height={614}
            alt={''}
            src={item.src}
            className={styles.picture}
          />
        </Link>
      ))}
    </div>
  );
}

function CategoryProducts({
  tabs,
  current
}: {
  tabs: BrickTab[];
  current: number;
}) {
  const hasMultipleTabs = tabs.length > 1;
  const products = tabs[current].products || [];
  const overflowProduct = products[7];

  return (
    <ul className={styles.products}>
      {products
        .slice(0, hasMultipleTabs && overflowProduct ? -1 : 8)
        .map((product) => (
          <li key={product.name} className={styles.product_item}>
            <Link
              target={'_blank'}
              href={buildProductUrl(product.id)}
              className={'block h-full w-full'}
            >
              <Image
                className={styles.picture}
                src={product.pictureUrl}
                alt={product.name}
                width={160}
                height={160}
              />
              <div>
                <div className={clsx(styles.label, 'text-ellipsis')}>
                  {product.name}
                </div>
                <div className={clsx(styles.description, 'text-ellipsis')}>
                  {product.description}
                </div>
                <Space>
                  <span className={styles.price}>
                    {formatAmount(product.price, product.hasMultiplePrices)}
                  </span>
                  {!!product.originalPrice &&
                    product.originalPrice > product.price && (
                      <span className={clsx(styles.price, styles.original)}>
                        {formatAmount(
                          product.originalPrice,
                          product.hasMultiplePrices
                        )}
                      </span>
                    )}
                </Space>
              </div>
            </Link>
          </li>
        ))}

      {hasMultipleTabs && (
        <li>
          {!!overflowProduct && (
            <Link
              style={{ marginBottom: 14 }}
              className={clsx(styles.product_item, styles.small)}
              href={buildProductUrl(overflowProduct.id)}
              target={'_blank'}
            >
              <Image
                className={styles.picture}
                src={overflowProduct.pictureUrl}
                alt={overflowProduct.name}
                width={80}
                height={80}
              />
              <div>
                <div className={clsx(styles.label, 'text-ellipsis')}>
                  {overflowProduct.name}
                </div>
                <span className={styles.price}>{overflowProduct.price}</span>
              </div>
            </Link>
          )}
          <Link
            href={`/search?categoryId=${tabs[current].categoryId}`}
            className={clsx(styles.product_item, styles.small)}
          >
            <div className={styles.picture}>
              <ArrowRightCircleIcon className={styles.icon} />
            </div>
            <div>
              <div className={styles.label}>浏览更多</div>
              <div className={clsx(styles.description, 'text-ellipsis')}>
                {tabs[current].name}
              </div>
            </div>
          </Link>
        </li>
      )}
    </ul>
  );
}
