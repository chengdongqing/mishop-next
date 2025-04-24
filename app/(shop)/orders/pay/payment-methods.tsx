'use client';

import popup from '@/components/ui/popup';
import { PaymentMethod } from '@/enums/order';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { startTransition, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

export default function PaymentMethods({ id }: { id: string }) {
  const router = useRouter();
  const popupCloseFn = useRef<() => void | null>(null);

  useEffect(() => {
    const socket = io('http://localhost:3001');
    socket.emit('join', id);

    socket.on('paid', () => {
      popupCloseFn.current?.();
      router.replace('/orders/pay/success/' + id);
    });

    return () => {
      socket.disconnect();
    };
  }, [id, router]);

  function requestPay(option: PaymentOption) {
    popupCloseFn.current = popup.open({
      title: `${option.label}支付`,
      width: 370,
      footer: null,
      content: (
        <div className={'text-center'}>
          <Image
            src={
              'https://i.huodong.mi.com/qrcode/wxget?code=weixin%3A%2F%2Fwxpay%2Fbizpayurl%3Fpr%3D3X3F5Efzz&key=3361d67c9d7664f3a5749925c9ce1c25'
            }
            alt={'qrcode'}
            width={300}
            height={300}
            unoptimized
            className={'mx-auto h-[300] w-[300]'}
          />
          <div className={'mt-2.5'}>
            请使用 <span className={'text-primary'}>{option.label}</span> 扫一扫
            <br />
            二维码完成支付
          </div>
        </div>
      )
    });

    // 模拟通知回调
    setTimeout(() => {
      startTransition(async () => {
        await fetch(`/api/notify/${option.slug}?out_trade_no=${id}`, {
          method: 'POST'
        });
      });
    }, 3000);
  }

  return (
    <section className={'mt-[30] bg-white p-[30_48]'}>
      <div className={'text-lg text-[rgb(66,66,66)]'}>选择以下支付方式付款</div>
      <div className={'border-primary my-[30] border-t-1'} />
      <ul className={'flex gap-[14]'}>
        {options.map((option) => (
          <PaymentItem
            key={option.label}
            label={option.label}
            iconUrl={option.iconUrl}
            onClick={() => requestPay(option)}
          />
        ))}
      </ul>
    </section>
  );
}

function PaymentItem({
  label,
  iconUrl,
  onClick
}: {
  label: string;
  iconUrl: string;
  onClick: () => void;
}) {
  return (
    <li>
      <button
        className={
          'border-primary cursor-pointer border-1 duration-200 hover:border-[var(--color-primary)]'
        }
        onClick={onClick}
      >
        <Image src={iconUrl} alt={label} width={180} height={60} unoptimized />
      </button>
    </li>
  );
}

interface PaymentOption {
  method: PaymentMethod;
  label: string;
  slug: string;
  iconUrl: string;
}

const options: PaymentOption[] = [
  {
    method: PaymentMethod.ALIPAY,
    label: '支付宝',
    slug: 'alipay',
    iconUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/031f3af10e3856352b847fe480b2b2e5.png'
  },
  {
    method: PaymentMethod.MI_PAY,
    label: '小米钱包',
    slug: 'mipay',
    iconUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/60ca2cd19969cfbfa9a5507ab80ab620.png'
  },
  {
    method: PaymentMethod.WECHAT_PAY,
    label: '微信',
    slug: 'wechat',
    iconUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4cdfb179cdce8f95c57e8d82c469d20c.png'
  }
];
