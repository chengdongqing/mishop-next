'use client';

import { sleep } from '@/app/lib/utils';
import Input, { InputProps } from '@/components/ui/input';
import toast from '@/components/ui/toast';
import useCountdown from '@/hooks/useCountdown';
import clsx from 'clsx';
import { useRef, useState } from 'react';
import styles from './styles.module.css';

interface VerificationCodeInputProps extends InputProps {
  interval?: number;
}

export default function VerificationCodeInput({
  interval = 120,
  placeholder = '验证码',
  ...rest
}: VerificationCodeInputProps) {
  const sending = useRef(false);
  const hasSent = useRef(false);
  const [waiting, setWaiting] = useState(false);
  const [seconds, { start }] = useCountdown(interval, true, () => {
    setWaiting(false);
  });

  function sendCode() {
    return sleep(1000);
  }

  function send() {
    if (!waiting && !sending.current) {
      sending.current = true;
      const closeLoading = toast.loading('发送中...');
      sendCode()
        .finally(() => {
          closeLoading();
          sending.current = false;
        })
        .then(() => {
          start();
          setWaiting(true);
          hasSent.current = true;
          toast.success('发送成功，请注意查收');
        })
        .catch(toast.warning);
    }
  }

  return (
    <Input
      type={'number'}
      placeholder={placeholder}
      suffix={
        <div
          className={clsx(
            styles.btn_send,
            waiting && !!seconds && styles.disabled
          )}
          onClick={send}
        >
          {!hasSent.current ? '获取验证码' : '重新发送'}
          {waiting && seconds ? ` ${seconds}s` : ''}
        </div>
      }
      {...rest}
    />
  );
}
