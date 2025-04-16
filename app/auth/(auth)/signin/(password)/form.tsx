'use client';

import { signIn } from '@/auth';
import Button from '@/components/ui/button';
import Checkbox from '@/components/ui/checkbox';
import Input from '@/components/ui/input';
import { useActionState } from 'react';
import Agreement from '../../agreement';

type State = { error?: string };

async function loginAction(_: State, formData: FormData): Promise<State> {
  const res = await signIn('credentials', {
    redirect: false,
    identifier: formData.get('identifier'),
    password: formData.get('password')
  });

  if (res?.error) {
    return { error: '用户名或密码错误' };
  }

  if (res?.ok) {
    return { res };
  }

  return {};
}

export default function SignInForm() {
  const [state, formAction, isPending] = useActionState(loginAction, {});

  console.log('state', state);

  return (
    <form action={formAction} className={'flex flex-col gap-y-5'}>
      <Input name={'identifier'} placeholder={'手机号/邮箱'} required />
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
        loading={isPending}
        className={'!h-[60] !w-full rounded-sm !text-lg'}
      >
        登录
      </Button>
    </form>
  );
}
