import { Metadata } from 'next';
import ResetForm from './form';
import TopBar from './top-bar';

export const metadata: Metadata = {
  title: '小米账号 - 重置密码'
};

export default function ResetPasswordPage() {
  return (
    <div className={'min-h-screen min-w-screen dark:bg-black'}>
      <div className={'mx-auto flex min-h-screen w-[956] flex-col'}>
        <TopBar />
        <h4
          className={
            'mb-4 pt-3 text-center text-xl dark:text-[hsla(0,0%,100%,.95)]'
          }
        >
          重置密码
        </h4>
        <div className={'flex flex-1 items-center justify-center'}>
          <div
            className={
              'w-[450] rounded-sm p-[40_45] shadow-[0_0_50px_0_hsla(0,0%,64%,.1)] dark:bg-[#242424]'
            }
          >
            <ResetForm />
          </div>
        </div>
      </div>
    </div>
  );
}
