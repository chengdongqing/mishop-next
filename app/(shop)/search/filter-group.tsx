'use client';

import { ProductOrderBy } from '@/app/enums';
import { ProductCategory, ProductLabel } from '@/app/types/product';
import Checkbox from '@/components/ui/checkbox';
import FilterBar from '@/components/ui/filter-bar';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Key } from 'react';
import Sorter from './sorter';

interface Props {
  categories: ProductCategory[];
  labels: ProductLabel[];
}

export default function FilterGroup({ categories, labels }: Props) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('categoryId');
  const labelId = searchParams.get('labelId');
  const orderBy = searchParams.get('orderBy');
  const onlyAvailable = searchParams.get('onlyAvailable');

  function handleSearch(field: string, value: Key | undefined) {
    const params = new URLSearchParams(searchParams);
    if (value !== undefined) {
      params.set(field, value.toString());
    } else {
      params.delete(field);
    }
    params.delete('page');
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      <div className={'w-primary py-4.5'}>
        <FilterBar
          label={'类别'}
          options={categories}
          value={categoryId ? Number(categoryId) : undefined}
          onChange={(id) => handleSearch('categoryId', id)}
        />
        <div className={'w-full border-b-1 border-[#ededed]'} />
        <FilterBar
          label={'标签'}
          options={labels}
          value={labelId ? Number(labelId) : undefined}
          onChange={(id) => handleSearch('labelId', id)}
        />
      </div>
      <div className={'bg-primary py-5'}>
        <div className={'w-primary flex justify-between pt-5 pb-2'}>
          <Sorter
            value={orderBy ? (orderBy as ProductOrderBy) : undefined}
            onChange={(value) => handleSearch('orderBy', value)}
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
