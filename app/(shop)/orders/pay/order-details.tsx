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
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

export default function OrderDetails({ order }: { order: Order }) {
  const [expanded, toggleExpanded] = useToggle();

  return (
    <section className={'flex items-start bg-white p-[30_48]'}>
      <CheckCircleIcon className={'mt-4 w-[100] text-[var(--color-success)]'} />
      <div className={'ml-[38] flex-1 text-[rgb(97,97,97)]'}>
        <PaymentInfo
          order={order}
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
  expanded,
  onToggle
}: {
  order: Order;
  expanded: boolean;
  onToggle: () => void;
}) {
  const router = useRouter();

  // 剩余时间（秒）
  const seconds = useMemo(() => {
    if (order) {
      return dayjs(order.createdAt).add(60, 'minutes').diff(dayjs(), 'seconds');
    }
    return 0;
  }, [order]);
  // 倒计时
  const [remaining] = useCountdown(seconds, false, () => {
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

/**
 * 时长格式化
 */
function formatDuration(seconds: number) {
  // 处理负数和零的情况
  if (seconds <= 0) {
    return '0秒';
  }

  // 定义时间单位对应的秒数常量
  const SECONDS_IN_MINUTE = 60;
  const SECONDS_IN_HOUR = 60 * SECONDS_IN_MINUTE;
  const SECONDS_IN_DAY = 24 * SECONDS_IN_HOUR;

  // 确保处理的是整数秒（丢弃小数部分）
  let remainingSeconds = Math.floor(seconds);

  // 计算天、时、分、秒
  const days = Math.floor(remainingSeconds / SECONDS_IN_DAY);
  remainingSeconds %= SECONDS_IN_DAY; // 计算去除天后剩余的秒数

  const hours = Math.floor(remainingSeconds / SECONDS_IN_HOUR);
  remainingSeconds %= SECONDS_IN_HOUR; // 计算去除时后剩余的秒数

  const minutes = Math.floor(remainingSeconds / SECONDS_IN_MINUTE);
  const finalSeconds = remainingSeconds % SECONDS_IN_MINUTE; // 最终剩余的秒数

  // 构建结果
  const parts: string[] = [];

  if (days > 0) {
    parts.push(`${days}天`);
  }
  if (hours > 0) {
    parts.push(`${hours}时`);
  }
  if (minutes > 0) {
    parts.push(`${minutes}分`);
  }
  if (finalSeconds > 0) {
    parts.push(`${finalSeconds}秒`);
  }

  return parts.join('');
}
