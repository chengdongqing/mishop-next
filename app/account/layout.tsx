import Header from '@/app/auth/(auth)/header';
import { Footer } from '@/app/auth/(auth)/layout';
import { UserInfoProvider } from '@/contexts/user-info-context';
import { getUserInfo } from '@/services/users';
import { PropsWithChildren } from 'react';
import SideBar from './side-bar';

export default async function AccountLayout({ children }: PropsWithChildren) {
  const userInfo = await getUserInfo();

  return (
    <UserInfoProvider userInfo={userInfo}>
      <div className={'flex min-h-screen flex-col'}>
        <Header />
        <div
          className={
            'relative mx-auto my-5 flex min-h-[calc(100vh-120px)] w-full max-w-[1440] gap-x-5 px-[80] pb-[32]'
          }
        >
          <SideBar />
          <main
            className={'flex-1 rounded-sm shadow-[0_20px_50px_6px_#a3a3a31a]'}
          >
            {children}
          </main>
          <Footer className={'!bottom-0'} />
        </div>
      </div>
    </UserInfoProvider>
  );
}
