import clsx from 'clsx';
import { Metadata, type Viewport } from 'next';
import Image from 'next/image';
import { PropsWithChildren } from 'react';
import Header from './header';
import MainCard from './main-card';

export const metadata: Metadata = {
  description:
    '小米账号能使用小米手机，小米云，多看阅读，米聊，小米社区等小米服务。',
  keywords:
    '小米帐号，小米账号，小米注册，注册，Mi Account，Xiaomi Account，Sign in，小米，帐号，账号，小米账户，小米帐户，登录，登陆，安全令牌，动态口令，小米注册，找回密码'
};

export const viewport: Viewport = {
  width: 'device-width'
};

export const dynamic = 'force-static';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className={'flex min-h-screen'}>
      <SideBar />
      <div className={'relative flex flex-1 flex-col'}>
        <Header />
        <div className={'flex flex-1 items-center justify-center'}>
          <div className={'my-[80] min-h-[570]'}>
            <MainCard>{children}</MainCard>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

function SideBar() {
  return (
    <aside>
      <Image
        src={
          'https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/banner.92c693b4..jpg'
        }
        alt={''}
        width={750}
        height={1800}
        unoptimized
        priority
        className={
          'min-h-screen w-[375] object-cover max-lg:w-[200] max-md:hidden'
        }
      />
    </aside>
  );
}

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={clsx(
        'absolute right-0 bottom-4 left-0 px-5 text-center text-xs text-ellipsis text-[#999]',
        className
      )}
    >
      小米公司版权所有-京ICP备10046444-
      <a
        href={
          'https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020134'
        }
        target={'_blank'}
        rel={'noopener noreferrer'}
      >
        京公网安备11010802020134号
      </a>
      -京ICP证110507号
    </footer>
  );
}
