'use client';

import Button from '@/components/ui/button';
import Checkbox from '@/components/ui/checkbox';
import FormErrorTips from '@/components/ui/form-error-tips';
import Input from '@/components/ui/input';
import popup from '@/components/ui/popup';
import VerificationCodeInput from '@/components/ui/verification-code-input';
import { signup } from '@/services/auth';
import { sendSmsVerificationCode } from '@/services/verification-code';
import { useRouter, useSearchParams } from 'next/navigation';
import { useActionState, useEffect, useRef } from 'react';
import Agreement from '../agreement';

export default function SignUpForm() {
  const [{ errors, success, message }, formAction, isPending] = useActionState(
    signup,
    {}
  );
  const phone = useRef('');
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (success) {
      popup.alert('恭喜您，注册成功！', () => {
        router.replace(`/auth/signin?${searchParams.toString()}`);
      });
    } else if (message) {
      popup.alert(message);
    }
  }, [message, router, searchParams, success]);

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
          phone.current = value;
        }}
      />
      <FormErrorTips id={'phone-error'} errors={errors?.phone} />
      <VerificationCodeInput
        name={'verificationCode'}
        type={'number'}
        required
        error={!!errors?.verificationCode?.length}
        aria-describedby="verification-code-error"
        onSend={async () => {
          if (phone.current.trim()) {
            const res = await sendSmsVerificationCode(phone.current);
            if (!res.success) {
              throw new Error(res.message);
            }
          } else {
            throw new Error('请输入手机号');
          }
        }}
      />
      <FormErrorTips
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
      <FormErrorTips id={'password-error'} errors={errors?.password} />
      <Input
        name={'confirmPassword'}
        placeholder={'确认密码'}
        type={'password'}
        required
        error={!!errors?.confirmPassword?.length}
        aria-describedby="confirm-password-error"
      />
      <FormErrorTips
        id={'confirm-password-error'}
        errors={errors?.confirmPassword}
      />
      <Checkbox name={'agreed'} value={'1'} required>
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
