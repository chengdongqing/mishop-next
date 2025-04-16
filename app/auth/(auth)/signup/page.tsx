import Button from '@/components/ui/button';
import Checkbox from '@/components/ui/checkbox';
import Input from '@/components/ui/input';
import VerificationCodeInput from '@/components/ui/verification-code-input';
import { Metadata } from 'next';
import Agreement from '../agreement';

export const metadata: Metadata = {
  title: '小米账号 - 注册'
};

export default function SignupPage() {
  return (
    <form className={'flex flex-col gap-y-5'}>
      <Input name={'phone'} placeholder={'手机号'} type={'number'} required />
      <VerificationCodeInput name={'code'} type={'number'} required />
      <Input
        name={'password'}
        placeholder={'密码'}
        type={'password'}
        required
      />
      <Input
        name={'passwordRepeat'}
        placeholder={'确认密码'}
        type={'password'}
        required
      />
      <Checkbox name={'agreed'} value={'1'} required autoTheme>
        <Agreement />
      </Checkbox>
      <Button type={'submit'} className={'!h-[60] !w-full rounded-sm !text-lg'}>
        注册
      </Button>
    </form>
  );
}
