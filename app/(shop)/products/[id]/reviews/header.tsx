'use client';

import Checkbox from '@/components/ui/checkbox';
import clsx from 'clsx';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Header({
  scoresMap = {},
  all = 0
}: {
  scoresMap: Record<number, number>;
  all: number;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const currentCategory = category ? Number(category) : undefined;
  const withPhotosOnly = searchParams.get('withPhotosOnly');

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
      <div className={'bg-white p-[40]'}>
        <h2 className={'text-lg text-[#757575]'}>大家认为</h2>
        <ul className={'mt-3.5 flex gap-x-6'}>
          {categories.map((category) => (
            <CategoryItem
              key={category.label}
              isActive={category.value === currentCategory}
              label={category.label}
              value={category.value ? (scoresMap[category.value] ?? 0) : all}
              onClick={() => handleSearch('category', category.value)}
            />
          ))}
        </ul>
      </div>

      <div className={'mt-[30] flex w-[792] items-center justify-between'}>
        <h2 className={'text-[22px] text-[#616161]'}>热门评价</h2>
        <Checkbox
          checked={withPhotosOnly ? Boolean(Number(withPhotosOnly)) : false}
          onChange={(value) => handleSearch('withPhotosOnly', value ? 1 : 0)}
        >
          <span className={'text-[#b0b0b0]'}>只显示带图评价</span>
        </Checkbox>
      </div>
    </>
  );
}

function CategoryItem({
  isActive,
  label,
  value,
  onClick
}: {
  isActive: boolean;
  label: string;
  value: number;
  onClick: () => void;
}) {
  return (
    <li
      className={clsx(
        'h-[44] w-[170] cursor-pointer border-1 text-center text-sm leading-[44px] duration-200',
        isActive
          ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
          : 'bg-primary border-primary text-[#b0b0b0]',
        { 'hover:bg-[#eee]': !isActive }
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
