'use client';

import Agreement from '@/app/auth/(auth)/agreement';
import Button from '@/components/ui/button';
import Checkbox from '@/components/ui/checkbox';
import Input from '@/components/ui/input';
import popup from '@/components/ui/popup';
import toast from '@/components/ui/toast';
import VerificationCodeInput from '@/components/ui/verification-code-input';
import { createUser } from '@/services/users';
import { sendSmsVerificationCode } from '@/services/verification-code';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useRef } from 'react';

export default function SignupForm() {
  const [{ errors, success, message }, formAction, isPending] = useActionState(
    createUser,
    {}
  );
  const router = useRouter();

  useEffect(() => {
    if (success) {
      popup.alert('恭喜您，注册成功！', () => {
        router.replace('/auth/signin');
      });
    } else if (message) {
      popup.alert(message);
    }
  }, [message, router, success]);

  const phoneNumber = useRef('');

  return (
    <form action={formAction} className={'flex flex-col gap-y-5'}>
      <Input
        name={'phone'}
        placeholder={'手机号'}
        type={'number'}
        required
        error={!!errors?.phone?.length}
        aria-describedby="phone-error"
        onChange={(value) => {
          phoneNumber.current = value;
        }}
      />
      <ErrorTips id={'phone-error'} errors={errors?.phone} />
      <VerificationCodeInput
        name={'verificationCode'}
        type={'number'}
        required
        error={!!errors?.verificationCode?.length}
        aria-describedby="verification-code-error"
        onSend={async () => {
          if (phoneNumber.current.trim()) {
            await sendSmsVerificationCode(phoneNumber.current);
          } else {
            toast.warning('请输入手机号');
          }
        }}
      />
      <ErrorTips
        id={'verification-code-error'}
        errors={errors?.verificationCode}
      />
      <Input
        name={'password'}
        placeholder={'密码'}
        type={'password'}
        required
        error={!!errors?.password?.length}
        aria-describedby="password-error"
      />
      <ErrorTips id={'password-error'} errors={errors?.password} />
      <Input
        name={'confirmPassword'}
        placeholder={'确认密码'}
        type={'password'}
        required
        error={!!errors?.confirmPassword?.length}
        aria-describedby="confirm-password-error"
      />
      <ErrorTips
        id={'confirm-password-error'}
        errors={errors?.confirmPassword}
      />
      <Checkbox name={'agreed'} value={'1'} required autoTheme>
        <Agreement />
      </Checkbox>
      <Button
        type={'submit'}
        loading={isPending}
        className={'!h-[60] !w-full rounded-sm !text-lg'}
      >
        注册
      </Button>
    </form>
  );
}

function ErrorTips({ id, errors }: { id: string; errors?: string[] }) {
  if (!errors?.length) {
    return null;
  }

  return (
    <div id={id} aria-live="polite" aria-atomic="true">
      {errors?.map((error) => (
        <p className="-mt-2 text-sm text-red-500" key={error}>
          {error}
        </p>
      ))}
    </div>
  );
}
