import Button from '@/components/ui/button';
import RecommendProducts from '@/components/ui/recommend-products';
import { formatAmount } from '@/lib/utils';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: '支付成功 - 小米商城'
};

export default async function PaySuccessPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log({ id });

  return (
    <div className={'bg-primary'}>
      <div className={'w-primary py-[38]'}>
        <SuccessContent />
        <RecommendProducts title={'为你推荐'} />
      </div>
    </div>
  );
}

function SuccessContent() {
  return (
    <div className={'mb-[100] flex min-h-[400]'}>
      <SuccessPanel />
      <DetailsPanel />
    </div>
  );
}

function SuccessPanel() {
  return (
    <div
      className={
        'flex w-[500] flex-col justify-center bg-[var(--color-success)] text-center'
      }
    >
      <h1 className={'mb-[1] text-[48px] text-white'}>支付成功</h1>
      <div className={'m-[20_0_30] text-[#ff0]'}>
        <span className={'text-2xl'}>{formatAmount(188.9)}</span>元
      </div>
      <Link href={'/orders/123'}>
        <Button
          className={
            'mx-auto mb-[30] !border-[#fff] !bg-transparent !text-white hover:opacity-80'
          }
          outlined
        >
          查看订单详情
        </Button>
      </Link>
      <p className={'text-xs'}>
        小米公司不会以任何理由要求您提供银行卡信息或支付额外费用
        <br />
        请谨防钓鱼链接或诈骗电话。
        <a
          href={'https://www.mi.com/service/help_center/fraud/'}
          target={'_blank'}
          rel={'noreferrer nofollow'}
          className={'inline-flex text-[#ff0] duration-200 hover:opacity-80'}
        >
          了解详情
          <ChevronRightIcon className={'w-5'} />
        </a>
      </p>
    </div>
  );
}

function DetailsPanel() {
  return (
    <div className={'relative flex-1 bg-white p-[50_60]'}>
      <ul>
        <DetailItem label={'订单编号'}>5230601985602776</DetailItem>
        <DetailItem label={'收货信息'}>
          海盐芝士不加糖 189****2398
          <br />
          重庆市 江北区 马栏星镇 一心村
          <br />
          <span className={'text-primary'}>
            * 在“订单详情页”你可以确认收货地址或者更改收货地址
          </span>
        </DetailItem>
        <DetailItem label={'商品名称'}>
          米家负离子速干吹风机 H300
          <span className={'ml-1 text-[rgb(176,176,176)]'}>x 1</span>
          <br />
          米家指甲刀五件套
          <span className={'ml-1 text-[rgb(176,176,176)]'}>x 1</span>
        </DetailItem>
      </ul>
      <div className={'absolute right-[40] bottom-[25] text-center text-xs'}>
        <Image
          src={'https://c1.mifile.cn/f/i/15/pay/app-code.png'}
          alt={'qrcode'}
          width={86}
          height={86}
          unoptimized
          className={'mx-auto mb-2.5 h-[86] w-[86]'}
        />
        <span>
          通过小米商城app
          <br />
          随时跟踪订单
        </span>
      </div>
    </div>
  );
}

function DetailItem({ label, children }: PropsWithChildren<{ label: string }>) {
  return (
    <li className={'mb-2 flex leading-[24px]'}>
      <span className={'text-[#b0b0b0]'}>{label}：</span>
      <span className={'text-[#757575]'}>{children}</span>
    </li>
  );
}
