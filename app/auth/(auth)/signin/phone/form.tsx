'use client';

import Button from '@/components/ui/button';
import Checkbox from '@/components/ui/checkbox';
import Input from '@/components/ui/input';
import popup from '@/components/ui/popup';
import toast from '@/components/ui/toast';
import VerificationCodeInput from '@/components/ui/verification-code-input';
import { authenticateByCode } from '@/services/auth';
import { sendSmsVerificationCode } from '@/services/verification-code';
import { useRouter, useSearchParams } from 'next/navigation';
import { useActionState, useEffect, useRef } from 'react';
import ErrorTips from '../../../error-tips';
import Agreement from '../../agreement';

export default function SignInForm() {
  const [{ errors, success, message }, formAction, isPending] = useActionState(
    authenticateByCode,
    {}
  );
  const phone = useRef('');
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
      <ErrorTips id={'phone-error'} errors={errors?.phone} />
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
      <ErrorTips
        id={'verification-code-error'}
        errors={errors?.verificationCode}
      />
      <span className={'text-xs text-[#999]'}>
        未注册的手机号验证后将自动创建小米账号
      </span>
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
