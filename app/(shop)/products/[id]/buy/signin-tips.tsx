'use client';

import useToggle from '@/hooks/useToggle';
import { XMarkIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

export default function SigninTips() {
  const [visible, toggleVisible] = useToggle(true);

  if (!visible) {
    return null;
  }

  return (
    <div className={'bg-primary flex h-[50] items-center justify-center'}>
      <span>为方便您购买，请提前登录</span>
      <Link href={'/auth/signin'} className={'text-primary ml-[25]'}>
        立即登录
      </Link>
      <button className={'ml-2.5 cursor-pointer'} onClick={toggleVisible}>
        <XMarkIcon className={'w-4.5 text-[#b5b5b5]'} />
      </button>
    </div>
  );
}
