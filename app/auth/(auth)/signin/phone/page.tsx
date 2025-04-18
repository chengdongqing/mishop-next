'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import SignInForm from './form';

export default function SignInByPhonePage() {
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
      <a
        target={'_blank'}
        rel={'noopener noreferrer'}
        href={
          'https://account.xiaomi.com/helpcenter/faq/_/01.guide/02.login/faq-3'
        }
        className={'text-primary text-base hover:text-[#ff7e29]'}
      >
        忘记账号？
      </a>
      <Link
        href={`/auth/signin?${searchParams.toString()}`}
        className={'text-primary text-base hover:text-[#ff7e29]'}
        replace
      >
        密码登录
      </Link>
    </div>
  );
}
