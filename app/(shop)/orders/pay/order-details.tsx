'use client';

import popup from '@/components/ui/popup';
import useCountdown from '@/hooks/useCountdown';
import useToggle from '@/hooks/useToggle';
import { EmptyValue, formatAmount } from '@/lib/utils';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';

export default function OrderDetails() {
  const [expanded, toggleExpanded] = useToggle();

  return (
    <section className={'flex items-start bg-white p-[30_48]'}>
      <CheckCircleIcon className={'mt-4 w-[100] text-[var(--color-success)]'} />
      <div className={'ml-[38] flex-1 text-[rgb(97,97,97)]'}>
        <PaymentInfo expanded={expanded} onToggle={toggleExpanded} />
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: expanded ? 'auto' : 0 }}
          className={'overflow-hidden'}
        >
          <div className={'border-primary my-[30] border-t-1'} />
          <OrderInfo />
        </motion.div>
      </div>
    </section>
  );
}

function PaymentInfo({
  expanded,
  onToggle
}: {
  expanded: boolean;
  onToggle: () => void;
}) {
  const router = useRouter();

  const [remaining] = useCountdown(60 * 30, false, () => {
    popup.alert('支付超时，订单已取消', () => {
      router.replace('/orders');
    });
  });

  return (
    <div className={'flex justify-between pt-5'}>
      <div>
        <h3 className={'mb-2.5 text-2xl text-[rgb(66,66,66)]'}>
          订单提交成功！去付款咯～
        </h3>
        <div className={'leading-[2]'}>
          请在
          <span className={'text-primary mx-1'}>
            {formatDuration(remaining)}
          </span>
          内完成支付，超时后将取消订单
        </div>
        <div hidden={expanded}>
          收货信息：海盐芝士不加糖 189****2398 重庆市 江北区 马栏星镇 一心村
        </div>
      </div>
      <div className={'text-right'}>
        <div>
          应付金额：
          <span className={'text-primary'}>
            <span className={'text-2xl'}>{formatAmount(188.9)}</span>元
          </span>
        </div>
        <button
          className={
            'hover:text-primary mt-2.5 inline-flex cursor-pointer leading-[2] duration-200'
          }
          onClick={onToggle}
        >
          订单详情
          <ChevronDownIcon
            className={clsx('w-5 duration-200', {
              'rotate-180': expanded
            })}
          />
        </button>
      </div>
    </div>
  );
}

function OrderInfo() {
  return (
    <div className={'flex'}>
      <div className={'grid grid-cols-[auto_auto] gap-[8_20]'}>
        <span>订单号：</span>
        <span className={'text-primary'}>5238374728934895</span>
        <span>收货信息：</span>
        <span>海盐芝士不加糖 189****2398 重庆市 江北区 马栏星镇 一心村</span>
        <span>商品名称：</span>
        <span>
          米家负离子速干吹风机 H300
          <span className={'text-[rgb(176,176,176)]'}> x 1</span>
          <br />
          米家指甲刀五件套
          <span className={'text-[rgb(176,176,176)]'}> x 1</span>
        </span>
      </div>
    </div>
  );
}

function formatDuration(seconds: number) {
  if (seconds < 0) return EmptyValue;

  const minutes = Math.floor(seconds / 60);
  const hours = seconds / 60 / 60;

  // 1小时内
  if (minutes < 60) {
    const seconds1 = Math.floor(seconds % 60);
    return `${minutes ? `${minutes}分` : ''}${seconds1 ? `${seconds1}秒` : ''}`;
  }
  // 一天以上
  if (hours >= 24) {
    const days = Math.floor(hours / 24);
    const hours1 = Math.round(hours % 24);
    return `${days ? `${days}天` : ''}${hours1 ? `${hours1}时` : ''}`;
  }
  // 一天以内
  const hours1 = Math.floor(hours);
  const minutes1 = Math.floor((hours - hours1) * 60);
  const seconds1 = Math.floor((seconds - (hours - hours1) * 60) % 60);
  return `${hours1 ? `${hours1}时` : ''}${minutes1 ? `${minutes1}分` : ''}${seconds1 ? `${seconds1}秒` : ''}`;
}
