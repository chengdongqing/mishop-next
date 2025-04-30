'use client';

import popup from '@/components/ui/popup';
import { displayAddress } from '@/lib/utils';
import { deleteShippingAddress } from '@/services/shipping-address';
import { ShippingAddress } from '@/types/user';
import clsx from 'clsx';
import openAddressFormPopup from './form';

export default function AddressBox({
  address,
  active,
  allowDelete = true,
  onClick
}: {
  address: ShippingAddress;
  active?: boolean;
  allowDelete?: boolean;
  onClick?: () => void;
}) {
  return (
    <li
      className={clsx(
        'group relative h-[178] cursor-pointer border-1 p-[16_24] leading-[22px] text-[#757575] duration-200',
        active
          ? 'border-[var(--color-primary)]'
          : 'border-primary hover:border-[#b0b0b0]'
      )}
      onClick={onClick}
    >
      <div className={'mb-2.5 flex items-center justify-between'}>
        <span className={'text-lg text-[#333]'}>{address.recipientName}</span>
        <span className={'text-[#b0b0b0]'}>{address.label}</span>
      </div>
      <div>{address.recipientPhone}</div>
      <div>
        {displayAddress(address.city)}
        <br />
        {address.address}
      </div>
      <div
        className={
          'text-primary invisible absolute right-6 bottom-2.5 flex gap-x-2.5 group-hover:visible'
        }
      >
        <button
          className={'cursor-pointer'}
          onClick={(e) => {
            e.stopPropagation();

            openAddressFormPopup(address);
          }}
        >
          修改
        </button>
        {allowDelete && (
          <button
            className={'cursor-pointer'}
            onClick={(e) => {
              e.stopPropagation();

              popup.confirm('确定删除该地址吗？', {
                async onOk() {
                  await deleteShippingAddress(address.id);
                }
              });
            }}
          >
            删除
          </button>
        )}
      </div>
    </li>
  );
}
