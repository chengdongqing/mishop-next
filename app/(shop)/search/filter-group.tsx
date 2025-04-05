'use client';

import { ProductOrderBy } from '@/app/enums';
import { ProductCategory, ProductLabel } from '@/app/types/product';
import Checkbox from '@/components/ui/checkbox';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Key, use } from 'react';
import FilterBar from './filter-bar';
import Sorter from './sorter';

export default function FilterGroup({
  filtersPromise
}: {
  filtersPromise: Promise<
    [ProductCategory[], ProductCategory[], Omit<ProductLabel, 'categoryId'>[]]
  >;
}) {
  const [categories, subCategories, labels] = use(filtersPromise);

  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('categoryId');
  const subCategoryId = searchParams.get('subCategoryId');
  const labelId = searchParams.get('labelId');
  const orderBy = searchParams.get('orderBy');
  const onlyAvailable = searchParams.get('onlyAvailable');

  function handleSearch(field: string, value: Key | undefined) {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(field, value.toString());
    } else {
      params.delete(field);
    }

    if (field === 'categoryId') {
      params.delete('subCategoryId');
    }
    if (field.toLowerCase().includes('category')) {
      params.delete('labelId');
    }

    params.delete('page');
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      <div className={'w-primary py-4.5'}>
        <FilterBar
          label={'分类'}
          options={categories}
          value={categoryId ? Number(categoryId) : undefined}
          onChange={(id) => handleSearch('categoryId', id)}
        />
        {subCategories.length > 0 && (
          <>
            <div className={'w-full border-b-1 border-[#ededed]'} />
            <FilterBar
              label={'子分类'}
              options={subCategories}
              value={subCategoryId ? Number(subCategoryId) : undefined}
              onChange={(id) => handleSearch('subCategoryId', id)}
            />
          </>
        )}
        {labels.length > 0 && (
          <>
            <div className={'w-full border-b-1 border-[#ededed]'} />
            <FilterBar
              label={'标签'}
              options={labels}
              value={labelId ? Number(labelId) : undefined}
              onChange={(id) => handleSearch('labelId', id)}
            />
          </>
        )}
      </div>
      <div className={'bg-primary py-5'}>
        <div className={'w-primary flex justify-between pt-5 pb-2'}>
          <Sorter
            value={orderBy ? (orderBy as ProductOrderBy) : undefined}
            onChange={(value) =>
              handleSearch(
                'orderBy',
                value === ProductOrderBy.NEWEST ? undefined : value
              )
            }
          />
          <Checkbox
            checked={onlyAvailable ? Boolean(Number(onlyAvailable)) : false}
            onChange={(value) => handleSearch('onlyAvailable', value ? 1 : 0)}
          >
            仅看有货
          </Checkbox>
        </div>
      </div>
    </>
  );
}
