import { Metadata, type Viewport } from 'next';
import { getTranslations } from 'next-intl/server';
import ResetForm from './form';
import TopBar from './top-bar';

export const metadata: Metadata = {
  title: '小米账号 - 重置密码'
};

export const viewport: Viewport = {
  width: 'device-width'
};

export default async function ResetPasswordPage() {
  const t = await getTranslations('ResetPassword');

  return (
    <div className={'min-h-screen min-w-screen'}>
      <div className={'mx-auto flex min-h-screen flex-col md:w-[956]'}>
        <TopBar />
        <h4
          className={
            'mb-4 pt-3 text-center text-xl dark:text-[hsla(0,0%,100%,.95)]'
          }
        >
          {t('title')}
        </h4>
        <div className={'flex flex-1 items-center justify-center'}>
          <div
            className={
              'rounded-sm p-[40_45] shadow-[0_0_50px_0_hsla(0,0%,64%,.1)] md:w-[450] dark:bg-[#242424]'
            }
          >
            <ResetForm />
          </div>
        </div>
      </div>
    </div>
  );
}
