'use client';

import { LayoutHeroCategory, LayoutHeroCategoryItem } from '@/types/layout';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';
import { LayoutHeroCategoryItemType } from '../../../enums';

export default function CategoryBar({
  categories
}: {
  categories: LayoutHeroCategory[];
}) {
  const [items, setItems] = useState<LayoutHeroCategoryItem[]>([]);

  return (
    <div onMouseLeave={() => setItems([])}>
      <ul
        className={
          'absolute top-0 left-0 z-10 h-[460] w-[234] bg-[rgba(105,101,101,.6)] py-[20]'
        }
      >
        {categories.map((category) => (
          <li
            key={category.name}
            className={
              'flex h-[42] cursor-pointer items-center justify-between pr-[18] pl-[30] text-sm text-white hover:bg-[var(--color-primary)]'
            }
            onMouseEnter={() => setItems(category.children)}
          >
            {category.name}
            <ChevronRightIcon className={'w-5'} />
          </li>
        ))}
      </ul>

      <ProductsPanel items={items} />
    </div>
  );
}

function ProductsPanel({ items }: { items: LayoutHeroCategoryItem[] }) {
  if (!items.length) {
    return null;
  }

  return (
    <ul
      className={
        'border-primary absolute top-0 left-[234] z-10 grid h-[460] grid-flow-col grid-rows-6 border-1 bg-white shadow-[0_8px_16px_rgba(0,0,0,.18)]'
      }
    >
      {items.slice(0, 24).map((item) => (
        <li key={item.name} className={'bg-white'}>
          <a
            href={getHref(item)}
            className={
              'hover:text-primary flex cursor-pointer items-center px-[20] py-[18]'
            }
          >
            <Image
              src={item.pictureUrl}
              alt={''}
              width={40}
              height={40}
              className={'mr-4'}
            />
            <span className={'w-[152] text-ellipsis'}>{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function getHref(item: LayoutHeroCategoryItem) {
  switch (item.type) {
    case LayoutHeroCategoryItemType.LABEL:
      return `/search?labelId=${item.associatedId}&categoryId=${item.parentCategoryId || item.categoryId || ''}&subCategoryId=${item.categoryId || ''}`;
    case LayoutHeroCategoryItemType.CATEGORY:
      return `/search?categoryId=${item.categoryId || item.associatedId}&subCategoryId=${item.associatedId || ''}`;
    case LayoutHeroCategoryItemType.PRODUCT:
      return `/products/${item.associatedId}`;
  }
}
