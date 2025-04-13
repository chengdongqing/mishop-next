import Logo from '@/components/ui/logo';
import Space from '@/components/ui/space';
import { Metadata } from 'next';
import Image from 'next/image';
import { HTMLProps, PropsWithChildren } from 'react';
import LanguagePicker from './language-picker';
import MainCard from './main-card';

export const metadata: Metadata = {
  description:
    '小米账号能使用小米手机，小米云，多看阅读，米聊，小米社区等小米服务。',
  keywords:
    '小米帐号，小米账号，小米注册，注册，Mi Account，Xiaomi Account，Sign in，小米，帐号，账号，小米账户，小米帐户，登录，登陆，安全令牌，动态口令，小米注册，找回密码'
};

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className={'flex'}>
      <SideBar />
      <div className={'relative flex flex-1 flex-col'}>
        <Header />
        <MainCard>{children}</MainCard>
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
        className={'h-screen w-[375] object-cover'}
      />
    </aside>
  );
}

function Header() {
  return (
    <header className={'flex items-center justify-between p-5'}>
      <Space size={10}>
        <Logo size={40} />
        <h2 className={'text-[26px] text-[rgba(0,0,0,.8)]'}>小米账号</h2>
      </Space>

      <Space split={<span className={'mx-[10] text-[#ddd]'}>|</span>}>
        <Space size={10}>
          <LinkItem
            href={
              'https://cn.account.xiaomi.com/about/protocol/agreement?_locale=zh_CN'
            }
          >
            用户协议
          </LinkItem>
          <LinkItem
            href={
              'https://cn.account.xiaomi.com/about/protocol/privacy?_locale=zh_CN'
            }
          >
            隐私政策
          </LinkItem>
          <LinkItem
            href={'https://cn.account.xiaomi.com/helpcenter?_locale=zh_CN'}
          >
            帮助中心
          </LinkItem>
        </Space>
        <LanguagePicker />
      </Space>
    </header>
  );
}

function LinkItem(props: HTMLProps<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      target={'_blank'}
      className={'hover:text-primary text-[#838383] duration-200'}
    />
  );
}

function Footer() {
  return (
    <footer
      className={
        'absolute right-0 bottom-4 left-0 px-5 text-center text-xs text-ellipsis text-[#999]'
      }
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
