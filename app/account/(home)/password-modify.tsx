import Button from '@/components/ui/button';
import FormErrorTips from '@/components/ui/form-error-tips';
import Input from '@/components/ui/input';
import popup from '@/components/ui/popup';
import { modifyPassword } from '@/services/users';
import { useActionState, useEffect } from 'react';

function PasswordModify({
  onOk,
  onCancel
}: {
  onOk: () => void;
  onCancel: () => void;
}) {
  const [{ errors, success }, formAction, isPending] = useActionState(
    modifyPassword,
    {}
  );

  useEffect(() => {
    if (success) {
      setTimeout(onOk);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  return (
    <div className={'p-[20_25]'}>
      <h3 className={'text-center text-lg leading-[40px]'}>修改密码</h3>
      <form action={formAction} className={'mt-5 flex flex-col gap-y-5'}>
        <Input
          name={'password'}
          placeholder={'输入新密码'}
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
          aria-describedby="confirm-password-error"
        />
        <FormErrorTips
          id={'confirm-password-error'}
          errors={errors?.confirmPassword}
        />
        <div className={'mt-5 flex gap-x-5'}>
          <Button
            className={
              '!h-[50] flex-1 rounded-sm !bg-[var(--color-bg-secondary)] !text-base !text-[var(--color-text-primary)]'
            }
            onClick={onCancel}
          >
            取消
          </Button>
          <Button
            type={'submit'}
            loading={isPending}
            className={'!h-[50] flex-1 rounded-sm !text-base'}
          >
            确定
          </Button>
        </div>
      </form>
    </div>
  );
}

export default function openPasswordModifyPopup(onOk: () => void) {
  const close = popup.open({
    footer: null,
    width: 450,
    content: (
      <PasswordModify
        onOk={() => {
          close();
          onOk();
        }}
        onCancel={() => close()}
      />
    )
  });
}
