import useToggle from '@/hooks/useToggle';
import { ShippingAddress } from '@/types/user';
import { ChevronDownIcon, PlusCircleIcon } from '@heroicons/react/16/solid';
import clsx from 'clsx';
import { motion } from 'motion/react';
import Title from './title';

interface Props {
  addresses: ShippingAddress[];
  value: ShippingAddress | null;
  onChange: (value: ShippingAddress) => void;
}

export default function CheckoutAddresses({
  addresses,
  value,
  onChange
}: Props) {
  const [expanded, onToggle] = useToggle();

  return (
    <section className={'mb-[30]'}>
      <Title>收货地址</Title>
      <motion.ul
        className={'grid grid-cols-4 gap-4 overflow-hidden'}
        initial={{ height: 178 }}
        animate={{ height: expanded ? 'auto' : 178 }}
      >
        {addresses.map((address) => (
          <AddressItem
            key={address.id}
            address={address}
            active={address.id === value?.id}
            onClick={() => onChange(address)}
          />
        ))}
        <AddItem />
      </motion.ul>
      {addresses.length > 4 && (
        <ExpandButton expanded={expanded} onToggle={onToggle} />
      )}
    </section>
  );
}

function AddressItem({
  address,
  active,
  onClick
}: {
  address: ShippingAddress;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <li
      className={clsx(
        'group relative h-[178] cursor-pointer border-1 p-[16_24] text-sm leading-[22px] text-[#757575] duration-200',
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
      <div>{address.phoneNumber}</div>
      <div>
        {address.city}
        <br />
        {address.address}
      </div>
      <button
        className={
          'text-primary invisible absolute right-6 bottom-2.5 cursor-pointer group-hover:visible'
        }
      >
        修改
      </button>
    </li>
  );
}

function AddItem() {
  return (
    <li
      className={
        'border-primary flex cursor-pointer items-center justify-center border-1 duration-200 hover:border-[#b0b0b0]'
      }
    >
      <span className={'flex flex-col items-center text-[#b0b0b0]'}>
        <PlusCircleIcon className={'mb-2 w-[35] text-[var(--color-border)]'} />
        添加新地址
      </span>
    </li>
  );
}

function ExpandButton({
  expanded,
  onToggle
}: {
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      className={
        'mt-5 flex h-[50] w-full cursor-pointer items-center justify-center bg-[#eee] text-sm text-[#424242]'
      }
      onClick={onToggle}
    >
      {expanded ? '收起' : '显示'}更多地址
      <ChevronDownIcon
        className={clsx('w-6 duration-200', {
          'rotate-180': expanded
        })}
      />
    </button>
  );
}
