import Button from '@/components/ui/button';
import useElementVisible from '@/hooks/useElementVisible';
import useToggle from '@/hooks/useToggle';
import { ShippingAddress } from '@/types/user';
import { ChevronDownIcon, PlusCircleIcon } from '@heroicons/react/16/solid';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { useRef } from 'react';
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
  const containerRef = useRef<HTMLElement | null>(null);

  return (
    <>
      <section className={'mb-[30]'} ref={containerRef}>
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

      {!value && addresses.length > 0 && (
        <AddressTopBar
          address={addresses[0]}
          onSelect={() => {
            onChange(addresses[0]);

            containerRef.current?.scrollIntoView({
              behavior: 'smooth'
            });
          }}
        />
      )}
    </>
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
        onClick={(e) => {
          e.stopPropagation();
        }}
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
        'mt-5 flex h-[50] w-full cursor-pointer items-center justify-center bg-[#eee] text-[#424242]'
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

function AddressTopBar({
  address,
  onSelect
}: {
  address: ShippingAddress;
  onSelect: () => void;
}) {
  const visible = useElementVisible(null, () => {
    return window.scrollY > 300;
  });

  if (!visible) {
    return null;
  }

  return (
    <div
      className={
        'fixed top-0 right-0 left-0 z-20 bg-[var(--color-bg)] shadow-[0_3px_6px_#0000001a]'
      }
    >
      <div className={'w-primary flex h-[70] items-center justify-between'}>
        <div>
          <span>{address.recipientName}</span>
          <span>{address.phoneNumber}</span>
          <span>
            {address.city} {address.address}
          </span>
        </div>
        <Button onClick={onSelect}>选择该收货地址</Button>
      </div>
    </div>
  );
}
