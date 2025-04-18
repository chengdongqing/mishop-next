'use client';

import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Select from '@/components/ui/select';
import VerificationCodeInput from '@/components/ui/verification-code-input';
import {
  sendEmailVerificationCode,
  sendSmsVerificationCode
} from '@/services/verification-code';
import { useRef, useState } from 'react';

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
  const [type, setType] = useState<ResetTypes>('phone');

  return (
    <form className={'flex flex-col gap-y-5'}>
      <Select
        options={types}
        activeKey={type}
        onChange={(value) => setType(value as ResetTypes)}
      />
      {type === 'phone' ? <PhoneGroup /> : <EmailGroup />}
      <Input name={'password'} placeholder={'新密码'} required />
      <Input name={'confirmPassword'} placeholder={'确认新密码'} required />
      <Button type={'submit'} className={'!h-[60] !w-full rounded-sm !text-lg'}>
        重置密码
      </Button>
    </form>
  );
}

function PhoneGroup() {
  const phone = useRef('');

  return (
    <>
      <Input
        name={'identifier'}
        placeholder={'手机号'}
        required
        onChange={(value) => {
          phone.current = value;
        }}
      />
      <VerificationCodeInput
        name={'verificationCode'}
        required
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
    </>
  );
}

function EmailGroup() {
  const email = useRef('');

  return (
    <>
      <Input
        name={'identifier'}
        placeholder={'邮箱'}
        required
        onChange={(value) => {
          email.current = value;
        }}
      />
      <VerificationCodeInput
        name={'verificationCode'}
        required
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
    </>
  );
}
