'use client';

import Button from '@/components/ui/button';
import Checkbox from '@/components/ui/checkbox';
import Input from '@/components/ui/input';
import popup from '@/components/ui/popup';
import toast from '@/components/ui/toast';
import { authenticate } from '@/services/auth';
import { useRouter, useSearchParams } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import ErrorTips from '../../../error-tips';
import Agreement from '../../agreement';

export default function SignInForm() {
  const [{ errors, success, message }, formAction, isPending] = useActionState(
    authenticate,
    {}
  );
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (success) {
      toast.success('登录成功！');

      const callback = searchParams.get('callback');
      router.replace(callback ? decodeURIComponent(callback) : '/');
    } else if (message) {
      popup.alert(message);
    }
  }, [searchParams, message, router, success]);

  return (
    <form action={formAction} className={'flex flex-col gap-y-5'}>
      <Input
        name={'identifier'}
        placeholder={'手机号/邮箱'}
        required
        error={!!errors?.identifier?.length}
        aria-describedby="identifier-error"
      />
      <ErrorTips id={'identifier-error'} errors={errors?.identifier} />
      <Input
        name={'password'}
        placeholder={'密码'}
        type={'password'}
        required
        error={!!errors?.password?.length}
        aria-describedby="password-error"
      />
      <ErrorTips id={'password-error'} errors={errors?.password} />
      <Checkbox name={'agreed'} value={'1'} required autoTheme>
        <Agreement />
      </Checkbox>
      <Button
        type={'submit'}
        loading={isPending}
        className={'!h-[60] !w-full rounded-sm !text-lg'}
      >
        登录
      </Button>
    </form>
  );
}
