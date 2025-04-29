import Button from '@/components/ui/button';
import FormErrorTips from '@/components/ui/form-error-tips';
import Input from '@/components/ui/input';
import popup from '@/components/ui/popup';
import VerificationCodeInput from '@/components/ui/verification-code-input';
import { checkAccountBeforeModify, modifyAccount } from '@/services/users';
import {
  sendEmailVerificationCode,
  sendSmsVerificationCode
} from '@/services/verification-code';
import { useActionState, useEffect, useRef, useState } from 'react';
import Steps from './steps';

export type AccountTypes = 'phoneNumber' | 'email';

function AccountModify({ type, onOk }: { type: AccountTypes; onOk(): void }) {
  const title = type === 'phoneNumber' ? '手机号' : '邮箱';
  const [step, setStep] = useState(1);
  const [account, setAccount] = useState('');

  return (
    <div className={'p-[20_25]'}>
      <h3 className={'text-center text-lg leading-[40px]'}>绑定安全{title}</h3>
      <Steps value={step} options={[`输入新${title}`, `验证新${title}`]} />
      {step === 1 ? (
        <Step1
          type={type}
          title={title}
          onNext={(account) => {
            setAccount(account);
            setStep(2);
          }}
        />
      ) : (
        <Step2 type={type} account={account} onOk={onOk} />
      )}
    </div>
  );
}

function Step1({
  type,
  title,
  onNext
}: {
  type: AccountTypes;
  title: string;
  onNext: (phone: string) => void;
}) {
  const [{ message, success }, formAction, isPending] = useActionState(
    checkAccountBeforeModify,
    {}
  );
  const account = useRef('');

  useEffect(() => {
    if (success) {
      onNext(account.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  return (
    <form action={formAction}>
      <input type={'hidden'} name={'type'} value={type} />
      <Input
        placeholder={title}
        onChange={(value) => (account.current = value)}
        name={'account'}
        required
        error={!!message}
        aria-describedby="account-error"
      />
      <FormErrorTips
        id={'account-error'}
        errors={message ? [message] : undefined}
        className={'mt-2'}
      />
      <Button
        type={'submit'}
        loading={isPending}
        className={'mt-[40] !h-[60] !w-full rounded-sm !text-lg'}
      >
        下一步
      </Button>
    </form>
  );
}

function Step2({
  type,
  account,
  onOk
}: {
  type: AccountTypes;
  account: string;
  onOk: () => void;
}) {
  const [{ message, success }, formAction, isPending] = useActionState(
    modifyAccount,
    {}
  );

  useEffect(() => {
    if (success) {
      setTimeout(onOk);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  return (
    <form action={formAction}>
      <input type={'hidden'} name={'type'} value={type} />
      <input type={'hidden'} name={'account'} value={account} />
      <VerificationCodeInput
        name={'verificationCode'}
        type={'number'}
        required
        error={!!message}
        aria-describedby="verification-code-error"
        onSend={async () => {
          const res = await (
            type === 'phoneNumber'
              ? sendSmsVerificationCode
              : sendEmailVerificationCode
          )(account);
          if (!res.success) {
            throw new Error(res.message);
          }
        }}
      />
      <FormErrorTips
        id={'verification-code-error'}
        errors={message ? [message] : undefined}
        className={'mt-2'}
      />
      <Button
        type={'submit'}
        loading={isPending}
        className={'mt-[40] !h-[60] !w-full rounded-sm !text-lg'}
      >
        确定
      </Button>
    </form>
  );
}

export default function openAccountModifyPopup(
  type: AccountTypes,
  onOk: () => void
) {
  const close = popup.open({
    footer: null,
    width: 450,
    content: (
      <AccountModify
        type={type}
        onOk={() => {
          close();
          onOk();
        }}
      />
    )
  });
}
