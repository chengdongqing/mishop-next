'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import SignInForm from './form';

export default function SignInPage() {
  return (
    <>
      <SignInForm />
      <Links />
    </>
  );
}

function Links() {
  const searchParams = useSearchParams();

  return (
    <div className={'mt-2.5 flex justify-between'}>
      <Link
        href={'/auth/reset-password'}
        className={'text-primary text-base hover:text-[#ff7e29]'}
      >
        忘记密码？
      </Link>
      <Link
        href={`/auth/signin/phone?${searchParams.toString()}`}
        className={'text-primary text-base hover:text-[#ff7e29]'}
        replace
      >
        手机号登录
      </Link>
    </div>
  );
}
