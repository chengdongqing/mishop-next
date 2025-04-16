import { Metadata } from 'next';
import { PropsWithChildren, Suspense } from 'react';
import OtherWays from './other-ways';

export const metadata: Metadata = {
  title: '小米账号 - 登录'
};

export default function SignInLayout({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <Suspense>
        <OtherWays />
      </Suspense>
    </>
  );
}
