import Button from '@/components/ui/button';
import Checkbox from '@/components/ui/checkbox';
import Input from '@/components/ui/input';
import VerificationCodeInput from '@/components/ui/verification-code-input';
import { Metadata } from 'next';
import Link from 'next/link';
import { Agreement } from '../layout';

export const metadata: Metadata = {
  title: '小米账号 - 登录'
};

export default function SignInByPhonePage() {
  return (
    <>
      <form className={'flex flex-col gap-y-5'}>
        <Input name={'phone'} placeholder={'手机号'} type={'number'} required />
        <VerificationCodeInput name={'code'} type={'number'} required />
        <span className={'text-xs text-[#999]'}>
          未注册的手机号验证后将自动创建小米账号
        </span>
        <Checkbox name={'agreed'} value={'1'} required>
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
      <a
        target={'_blank'}
        rel={'noopener noreferrer'}
        href={
          'https://account.xiaomi.com/helpcenter/faq/_/01.guide/02.login/faq-3'
        }
        className={'text-primary text-base hover:text-[#ff7e29]'}
      >
        忘记账号？
      </a>
      <Link
        href={'/auth/signin'}
        className={'text-primary text-base hover:text-[#ff7e29]'}
        replace
      >
        密码登录
      </Link>
    </div>
  );
}
