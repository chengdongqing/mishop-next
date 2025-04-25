import { Header } from '@/app/auth/(auth)/layout';
import { PropsWithChildren } from 'react';

export default async function AccountLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <div className={'flex'}>
        <aside></aside>
        <main>{children}</main>
      </div>
    </>
  );
}
