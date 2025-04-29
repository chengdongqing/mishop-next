'use client';

import Checkbox from '@/components/ui/checkbox';
import clsx from 'clsx';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface Props {
  ratingsMap: Record<number, number>;
  all: number;
}

export default function Header({ ratingsMap = {}, all = 0 }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get('rating');
  const currentCategory = category ? Number(category) : undefined;
  const onlyWithPhotos = searchParams.get('onlyWithPhotos');

  function handleSearch(field: string, value: number | undefined) {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(field, value.toString());
    } else {
      params.delete(field);
    }
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      <div className={'bg-[var(--color-bg)] p-[40]'}>
        <h2 className={'text-lg text-[#757575]'}>大家认为</h2>
        <ul className={'mt-3.5 flex gap-x-6'}>
          {categories.map((category) => (
            <CategoryItem
              key={category.label}
              label={category.label}
              value={category.value ? (ratingsMap[category.value] ?? 0) : all}
              isActive={category.value === currentCategory}
              onClick={() => handleSearch('rating', category.value)}
            />
          ))}
        </ul>
      </div>

      <div className={'mt-[30] flex w-[792] items-center justify-between'}>
        <h2 className={'text-[22px] text-[#616161]'}>热门评价</h2>
        <Checkbox
          checked={onlyWithPhotos ? Boolean(Number(onlyWithPhotos)) : false}
          onChange={(value) => handleSearch('onlyWithPhotos', value ? 1 : 0)}
        >
          <span className={'text-[#b0b0b0]'}>只显示带图评价</span>
        </Checkbox>
      </div>
    </>
  );
}

function CategoryItem({
  label,
  value,
  isActive,
  onClick
}: {
  label: string;
  value: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <li
      className={clsx(
        'h-[44] w-[170] cursor-pointer border-1 text-center leading-[44px] duration-200',
        isActive
          ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
          : 'bg-primary border-primary text-[#b0b0b0] hover:bg-[#eee]'
      )}
      onClick={onClick}
    >
      {label}（{value}）
    </li>
  );
}

const categories = [
  {
    label: '全部',
    value: undefined
  },
  {
    label: '非常满意',
    value: 5
  },
  {
    label: '比较满意',
    value: 4
  },
  {
    label: '满意',
    value: 3
  },
  {
    label: '失望',
    value: 2
  },
  {
    label: '非常失望',
    value: 1
  }
];
