import { auth } from '@/auth';
import LanguagePicker from '@/components/ui/language-picker';
import MiLogo from '@/components/ui/mi-logo';
import Space from '@/components/ui/space';
import ThemePicker from '@/components/ui/theme-picker';
import { signOut } from '@/services/auth';
import { getTranslations } from 'next-intl/server';
import { HTMLProps } from 'react';

export default async function Header() {
  const hasLogin = !!(await auth());
  const t = await getTranslations('LayoutHeader');

  return (
    <header className={'flex items-center justify-between p-5'}>
      <Space size={10}>
        <MiLogo size={40} />
        <h2 className={'text-[26px]'}>{t('title')}</h2>
      </Space>

      <div className={'flex items-center'}>
        <div className={'max-sm:hidden'}>
          <Space size={10}>
            <LinkItem
              href={'https://cn.account.xiaomi.com/about/protocol/agreement'}
            >
              {t('userAgreement')}
            </LinkItem>
            <LinkItem
              href={'https://cn.account.xiaomi.com/about/protocol/privacy'}
            >
              {t('privacyPolicy')}
            </LinkItem>
            <LinkItem href={'https://cn.account.xiaomi.com/helpcenter'}>
              {t('helpCenter')}
            </LinkItem>
          </Space>
          <span className={'ml-[10] text-[#ddd]'}>|</span>
        </div>
        <LanguagePicker />
        <span className={'ml-[10] text-[#ddd]'}>|</span>
        <ThemePicker />
        {hasLogin && (
          <button
            className={'text-primary ml-2.5 cursor-pointer font-extralight'}
            onClick={async () => {
              'use server';
              await signOut(true);
            }}
          >
            {t('logout')}
          </button>
        )}
      </div>
    </header>
  );
}

function LinkItem(props: HTMLProps<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      target={'_blank'}
      className={
        'hover:text-primary font-extralight text-[#838383] duration-200'
      }
    />
  );
}
