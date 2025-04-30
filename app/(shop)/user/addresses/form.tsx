import Button from '@/components/ui/button';
import FormErrorTips from '@/components/ui/form-error-tips';
import Input from '@/components/ui/input';
import popup from '@/components/ui/popup';
import Textarea from '@/components/ui/textarea';
import { submitShippingAddress } from '@/services/shipping-address';
import { ShippingAddress } from '@/types/user';
import { useActionState, useEffect } from 'react';
import CityPicker from './city-picker';

function AddressForm({
  address,
  onOk,
  onCancel
}: {
  address?: ShippingAddress;
  onOk: () => void;
  onCancel: () => void;
}) {
  const [{ errors, success }, formAction, isPending] = useActionState(
    submitShippingAddress,
    {}
  );

  useEffect(() => {
    if (success) {
      setTimeout(onOk);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  return (
    <form action={formAction} className={'flex flex-col gap-y-5'}>
      <input type={'hidden'} name={'id'} value={address?.id} />
      <div className={'flex gap-x-5'}>
        <div className={'flex-1'}>
          <Input
            placeholder={'姓名'}
            defaultValue={address?.recipientName}
            name={'recipientName'}
            required
            error={!!errors?.recipientName?.length}
            aria-describedby={'recipient-name-error'}
          />
          <FormErrorTips
            id={'recipient-name-error'}
            errors={errors?.recipientName}
            className={'mt-2'}
          />
        </div>
        <div className={'flex-1'}>
          <Input
            className={'flex-1'}
            placeholder={'手机号'}
            defaultValue={address?.recipientPhone}
            name={'recipientPhone'}
            required
            error={!!errors?.recipientPhone?.length}
            aria-describedby={'recipient-phone-error'}
          />
          <FormErrorTips
            id={'recipient-phone-error'}
            errors={errors?.recipientPhone}
            className={'mt-2'}
          />
        </div>
      </div>
      <CityPicker
        placeholder={'城市'}
        name={'city'}
        value={address?.city}
        required
        error={!!errors?.city?.length}
        aria-describedby={'city-error'}
      />
      <FormErrorTips id={'city-error'} errors={errors?.city} />
      <Textarea
        gray
        placeholder={'详细地址'}
        defaultValue={address?.address}
        name={'address'}
        required
        error={!!errors?.address?.length}
        aria-describedby={'address-error'}
        maxLength={50}
      />
      <FormErrorTips id={'address-error'} errors={errors?.address} />
      <Input
        name={'label'}
        placeholder={'地址标签'}
        defaultValue={address?.label ?? undefined}
        maxLength={10}
        error={!!errors?.label?.length}
        aria-describedby={'label-error'}
      />
      <FormErrorTips id={'label-error'} errors={errors?.label} />
      <div className={'mt-5 flex justify-center gap-x-5'}>
        <Button
          className={
            '!h-[50] !w-[200] rounded-sm !bg-[var(--color-bg-secondary)] !text-base !text-[var(--color-text-primary)]'
          }
          onClick={onCancel}
        >
          取消
        </Button>
        <Button
          type={'submit'}
          loading={isPending}
          className={'!h-[50] !w-[200] rounded-sm !text-base'}
        >
          确定
        </Button>
      </div>
    </form>
  );
}

export default function openAddressFormPopup(address?: ShippingAddress) {
  const close = popup.open({
    title: `${address ? '修改' : '添加'}收货地址`,
    content: (
      <AddressForm
        address={address}
        onOk={() => close()}
        onCancel={() => close()}
      />
    ),
    footer: null
  });
}
