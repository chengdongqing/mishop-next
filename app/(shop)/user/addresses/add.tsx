'use client';

import { PlusCircleIcon } from '@heroicons/react/16/solid';
import openAddressFormPopup from './form';

export default function AddBox() {
  return (
    <li
      className={
        'border-primary flex cursor-pointer items-center justify-center border-1 duration-200 hover:border-[#b0b0b0]'
      }
      onClick={() => openAddressFormPopup()}
    >
      <span className={'flex flex-col items-center text-[#b0b0b0]'}>
        <PlusCircleIcon className={'mb-2 w-[35] text-[var(--color-border)]'} />
        添加新地址
      </span>
    </li>
  );
}
