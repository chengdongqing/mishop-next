'use client';

import { CheckoutData } from '@/services/cart';
import { ShippingAddress } from '@/types/user';
import { useState } from 'react';
import CheckoutAddresses from './addresses';
import CheckoutBar from './checkout-bar';
import CheckoutProducts from './products';
import CheckoutSummary from './submmary';
import Title from './title';

interface CheckoutProps {
  addresses: ShippingAddress[];
  checkoutData: CheckoutData;
}

export default function CheckoutPanel({
  addresses,
  checkoutData
}: CheckoutProps) {
  const [address, setAddress] = useState<ShippingAddress | null>(null);

  return (
    <>
      <CheckoutAddresses
        addresses={addresses}
        value={address}
        onChange={setAddress}
      />
      <CheckoutProducts products={checkoutData.products} />
      <Divider />
      <section className={'flex h-[100] items-center'}>
        <Title className={'!mb-0 w-[150]'}>配送方式</Title>
        <span className={'text-primary'}>包邮</span>
      </section>
      <Divider />
      <CheckoutSummary summary={checkoutData.summary} />
      <CheckoutBar address={address} />
    </>
  );
}

function Divider() {
  return <div className={'border-primary border-t-1'} />;
}
