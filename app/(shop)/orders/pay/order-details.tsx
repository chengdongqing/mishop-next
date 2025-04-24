'use client';

import popup from '@/components/ui/popup';
import useCountdown from '@/hooks/useCountdown';
import useToggle from '@/hooks/useToggle';
import { formatAmount } from '@/lib/utils';
import { Order } from '@/types/order';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

dayjs.extend(duration);

export default function OrderDetails({
  order,
  timeout
}: {
  order: Order;
  timeout: number;
}) {
  const [expanded, toggleExpanded] = useToggle();

  return (
    <section className={'flex items-start bg-white p-[30_48]'}>
      <CheckCircleIcon className={'mt-4 w-[100] text-[var(--color-success)]'} />
      <div className={'ml-[38] flex-1 text-[rgb(97,97,97)]'}>
        <PaymentInfo
          order={order}
          timeout={timeout}
          expanded={expanded}
          onToggle={toggleExpanded}
        />
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: expanded ? 'auto' : 0 }}
          className={'overflow-hidden'}
        >
          <div className={'border-primary my-[30] border-t-1'} />
          <OrderInfo order={order} />
        </motion.div>
      </div>
    </section>
  );
}

function PaymentInfo({
  order,
  timeout,
  expanded,
  onToggle
}: {
  order: Order;
  timeout: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  const router = useRouter();

  // 剩余时间（秒）
  const seconds = useMemo(() => {
    if (order) {
      return dayjs(order.createdAt)
        .add(timeout, 'minutes')
        .diff(dayjs(), 'seconds');
    }
    return 0;
  }, [order, timeout]);
  // 倒计时
  const [remaining] = useCountdown(seconds, false, () => {
    popup.alert('支付超时，订单已取消', () => {
      router.replace('/orders');
    });
  });

  // 格式化后的时长
  // 避免在jsx中直接格式化，可能因为客户端和服务端的时间不一致导致水合出错
  const [formattedDuration, setFormattedDuration] = useState('');
  useEffect(() => {
    setFormattedDuration(formatDuration(remaining));
  }, [remaining]);

  return (
    <div className={'flex justify-between pt-5'}>
      <div>
        <h3 className={'mb-2.5 text-2xl text-[rgb(66,66,66)]'}>
          订单提交成功！去付款咯～
        </h3>
        <div className={'leading-[2]'}>
          请在
          <span className={'text-primary mx-1'}>{formattedDuration}</span>
          内完成支付，超时后将取消订单
        </div>
        <div hidden={expanded}>
          收货信息：
          {[
            order.recipientName,
            order.recipientPhone,
            order.recipientAddress
          ].join(' ')}
        </div>
      </div>
      <div className={'text-right'}>
        <div>
          应付金额：
          <span className={'text-primary'}>
            <span className={'text-2xl'}>
              {formatAmount(order.payableAmount)}
            </span>
            元
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

function OrderInfo({ order }: { order: Order }) {
  return (
    <div className={'flex'}>
      <div className={'grid grid-cols-[auto_auto] gap-[8_20]'}>
        <span>订单号：</span>
        <span className={'text-primary'}>{order.orderNumber}</span>
        <span>收货信息：</span>
        <span>
          {[
            order.recipientName,
            order.recipientPhone,
            order.recipientAddress
          ].join(' ')}
        </span>
        <span>商品名称：</span>
        <span>
          {order.items.map((item) => (
            <span key={item.id}>
              {item.productName} {item.skuName}
              <span className={'ml-1 text-[rgb(176,176,176)]'}>
                x {item.quantity}
              </span>
              <br />
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

function formatDuration(totalSeconds: number) {
  const d = dayjs.duration(totalSeconds, 'seconds');
  // 提取时、分、秒
  const hours = Math.floor(d.asHours());
  const minutes = d.minutes();
  const seconds = d.seconds();

  // 构建结果
  const parts: string[] = [];

  if (hours > 0) {
    parts.push(`${hours}时`);
  }
  if (minutes > 0) {
    parts.push(`${minutes}分`);
  }
  if (seconds > 0) {
    parts.push(`${seconds}秒`);
  }

  return parts.join('');
}
