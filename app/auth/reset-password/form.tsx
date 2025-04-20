'use client';

import Button from '@/components/ui/button';
import FormErrorTips from '@/components/ui/form-error-tips';
import Input from '@/components/ui/input';
import popup from '@/components/ui/popup';
import Select from '@/components/ui/select';
import VerificationCodeInput from '@/components/ui/verification-code-input';
import { resetPassword, ResetPasswordState } from '@/services/auth';
import {
  sendEmailVerificationCode,
  sendSmsVerificationCode
} from '@/services/verification-code';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useRef, useState } from 'react';

const types = [
  {
    key: 'phone',
    label: '手机号'
  },
  {
    key: 'email',
    label: '邮箱'
  }
];

type ResetTypes = 'phone' | 'email';

export default function ResetForm() {
  const [{ errors, success, message }, formAction, isPending] = useActionState(
    resetPassword,
    {}
  );
  const [type, setType] = useState<ResetTypes>('phone');
  const router = useRouter();

  useEffect(() => {
    if (success) {
      popup.alert('密码重置成功！', () => {
        router.replace('/auth/signin');
      });
    } else if (message) {
      popup.alert(message);
    }
  }, [message, router, success]);

  return (
    <form action={formAction} className={'flex flex-col gap-y-5'}>
      <Select
        name={'type'}
        value={type}
        options={types}
        required
        onChange={(value) => setType(value as ResetTypes)}
      />
      {type === 'phone' ? (
        <PhoneGroup errors={errors} />
      ) : (
        <EmailGroup errors={errors} />
      )}
      <Input
        name={'password'}
        placeholder={'新密码'}
        type={'password'}
        required
        error={!!errors?.password?.length}
        aria-describedby="password-error"
      />
      <FormErrorTips id={'password-error'} errors={errors?.password} />
      <Input
        name={'confirmPassword'}
        placeholder={'确认新密码'}
        type={'password'}
        required
        error={!!errors?.confirmPassword?.length}
        aria-describedby="confirmPassword-error"
      />
      <FormErrorTips
        id={'confirmPassword-error'}
        errors={errors?.confirmPassword}
      />
      <Button
        type={'submit'}
        loading={isPending}
        className={'!h-[60] !w-full rounded-sm !text-lg'}
      >
        重置密码
      </Button>
    </form>
  );
}

function PhoneGroup({ errors }: { errors?: ResetPasswordState['errors'] }) {
  const phone = useRef('');

  return (
    <>
      <Input
        name={'identifier'}
        placeholder={'手机号'}
        required
        error={!!errors?.identifier?.length}
        aria-describedby="phone-error"
        onChange={(value) => {
          phone.current = value;
        }}
      />
      <FormErrorTips id={'phone-error'} errors={errors?.identifier} />
      <VerificationCodeInput
        name={'verificationCode'}
        required
        error={!!errors?.verificationCode?.length}
        aria-describedby="verification-code-error"
        onSend={async () => {
          if (!phone.current.trim()) {
            throw new Error('请输入手机号');
          } else {
            const res = await sendSmsVerificationCode(phone.current);
            if (!res.success) {
              throw new Error(res.message);
            }
          }
        }}
      />
      <FormErrorTips
        id={'verification-code-error'}
        errors={errors?.verificationCode}
      />
    </>
  );
}

function EmailGroup({ errors }: { errors?: ResetPasswordState['errors'] }) {
  const email = useRef('');

  return (
    <>
      <Input
        name={'identifier'}
        placeholder={'邮箱'}
        type={'email'}
        required
        error={!!errors?.identifier?.length}
        aria-describedby="email-error"
        onChange={(value) => {
          email.current = value;
        }}
      />
      <FormErrorTips id={'email-error'} errors={errors?.identifier} />
      <VerificationCodeInput
        name={'verificationCode'}
        required
        error={!!errors?.verificationCode?.length}
        aria-describedby="verification-code-error"
        onSend={async () => {
          if (!email.current.trim()) {
            throw new Error('请输入邮箱');
          } else {
            const res = await sendEmailVerificationCode(email.current);
            if (!res.success) {
              throw new Error(res.message);
            }
          }
        }}
      />
      <FormErrorTips
        id={'verification-code-error'}
        errors={errors?.verificationCode}
      />
    </>
  );
}
