'use client';

import { OrderStatus, OrderStatusMap } from '@/enums/order';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import clsx from 'clsx';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Fragment, useState } from 'react';

export default function FilterBar() {
  return (
    <div className={'z-1 mb-3 flex h-[56] items-center justify-between'}>
      <StatusFilter />
      <SearchBar />
    </div>
  );
}

function StatusFilter() {
  return (
    <div className={'flex items-center'}>
      <StatusItem label={'全部'} />
      {Object.entries(OrderStatusMap).map(([value, label]) => (
        <Fragment key={value}>
          <Sep />
          <StatusItem label={label} status={value as OrderStatus} />
        </Fragment>
      ))}
    </div>
  );
}

function Sep() {
  return <div className={'border-primary mx-5 h-4 border-r-1'} />;
}

function StatusItem({
  label,
  status
}: {
  label: string;
  status?: OrderStatus;
}) {
  const searchParams = useSearchParams();
  const active = searchParams.get('status') ?? undefined;
  const pathname = usePathname();
  const router = useRouter();

  function handleFilter() {
    const params = new URLSearchParams(searchParams);
    if (status) {
      params.set('status', status);
    } else {
      params.delete('status');
    }
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div
      className={clsx(
        'cursor-pointer text-base',
        status === active
          ? 'text-primary'
          : 'text-[rgb(117,117,117)] duration-200 hover:opacity-80'
      )}
      onClick={handleFilter}
    >
      {label}
    </div>
  );
}

function SearchBar() {
  const [focused, setFocused] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function formAction(formData: FormData) {
    const params = new URLSearchParams(searchParams);
    const q = formData.get('q1')?.toString();
    if (q?.trim()) {
      params.set('q1', q);
    } else {
      params.delete('q1');
    }
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <form action={formAction} className={'group flex'}>
      <input
        name={'q1'}
        defaultValue={searchParams.get('q1')?.toString()}
        placeholder={'输入商品名称、订单号'}
        className={clsx(
          'h-[42] w-[220] border-1 px-2.5 text-xs duration-300',
          focused
            ? 'border-[var(--color-primary)]'
            : 'border-primary group-hover:border-[#b0b0b0]'
        )}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <button
        className={clsx(
          '-ml-[1px] flex h-[42] w-[42] cursor-pointer items-center justify-center border-1 text-[#616161]',
          'duration-300 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white',
          focused
            ? 'border-[var(--color-primary)]'
            : 'border-primary group-hover:border-[#b0b0b0]'
        )}
      >
        <MagnifyingGlassIcon className={'w-5'} />
      </button>
    </form>
  );
}
