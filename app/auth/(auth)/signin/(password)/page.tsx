import Button from '@/components/ui/button';
import Checkbox from '@/components/ui/checkbox';
import Input from '@/components/ui/input';
import { Metadata } from 'next';
import Link from 'next/link';
import Agreement from '../../agreement';

export const metadata: Metadata = {
  title: '小米账号 - 登录'
};

export default function SignInPage() {
  return (
    <>
      <form className={'flex flex-col gap-y-5'}>
        <Input name={'account'} placeholder={'手机号/邮箱'} required />
        <Input
          name={'password'}
          placeholder={'密码'}
          type={'password'}
          required
        />
        <Checkbox name={'agreed'} value={'1'} required autoTheme>
          <Agreement />
        </Checkbox>
        <Button
          type={'submit'}
          className={'!h-[60] !w-full rounded-sm !text-lg'}
        >
          登录
        </Button>
      </form>

      <Links />
    </>
  );
}

function Links() {
  return (
    <div className={'mt-2.5 flex justify-between'}>
      <Link
        href={'/auth/reset-password'}
        className={'text-primary text-base hover:text-[#ff7e29]'}
      >
        忘记密码？
      </Link>
      <Link
        href={'/auth/signin/phone'}
        className={'text-primary text-base hover:text-[#ff7e29]'}
        replace
      >
        手机号登录
      </Link>
    </div>
  );
}
