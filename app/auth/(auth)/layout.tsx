import Space from '@/components/ui/space';
import Image from 'next/image';
import { HTMLProps, PropsWithChildren } from 'react';
import LanguagePicker from './language-picker';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className={'flex'}>
      <aside>
        <Image
          src={
            'https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/banner.92c693b4..jpg'
          }
          alt={''}
          width={750}
          height={1800}
          unoptimized
          className={'h-screen w-[375] object-cover'}
        />
      </aside>
      <div className={'flex-1'}>
        <Header />
        {children}
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className={'flex items-center justify-between p-5'}>
      <Space size={10}>
        <Image
          src={'/logo.png'}
          alt={'logo image'}
          width={40}
          height={40}
          unoptimized
          className={'h-[40] w-[40]'}
        />
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
