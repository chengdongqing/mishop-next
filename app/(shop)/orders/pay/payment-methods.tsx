'use client';

import popup from '@/components/ui/popup';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function PaymentMethods() {
  return (
    <section className={'mt-[30] bg-white p-[30_48]'}>
      <div className={'text-lg text-[rgb(66,66,66)]'}>选择以下支付方式付款</div>
      <div className={'border-primary my-[30] border-t-1'} />
      <ul className={'flex gap-[14]'}>
        <PaymentItem
          label={'支付宝'}
          imageUrl={
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/031f3af10e3856352b847fe480b2b2e5.png'
          }
        />
        <PaymentItem
          label={'小米钱包'}
          imageUrl={
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/60ca2cd19969cfbfa9a5507ab80ab620.png'
          }
        />
        <PaymentItem
          label={'微信支付'}
          imageUrl={
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4cdfb179cdce8f95c57e8d82c469d20c.png'
          }
        />
      </ul>
    </section>
  );
}

function PaymentItem({ label, imageUrl }: { label: string; imageUrl: string }) {
  const router = useRouter();

  return (
    <li>
      <button
        className={
          'border-primary cursor-pointer border-1 duration-200 hover:border-[var(--color-primary)]'
        }
        onClick={() => {
          popup.open({
            title: `${label}支付`,
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
                  请使用 <span className={'text-primary'}>{label}</span> 扫一扫
                  <br />
                  二维码完成支付
                </div>
              </div>
            )
          });

          setTimeout(() => {
            router.replace('/orders/pay/success');
          }, 3000);
        }}
      >
        <Image src={imageUrl} alt={label} width={180} height={60} unoptimized />
      </button>
    </li>
  );
}
