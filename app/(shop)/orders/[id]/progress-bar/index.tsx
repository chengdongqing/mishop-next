'use client';

import { OrderStatus } from '@/enums/order';
import { orderEvents } from '@/lib/schema';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import styles from './styles.module.css';

type OrderEvent = typeof orderEvents.$inferSelect;

export default function ProgressBar({
  events,
  status
}: {
  events: OrderEvent;
  status: OrderStatus;
}) {
  const eventOptions = useMemo(() => {
    return OrderProgressOptions.map((item) => ({
      ...item,
      datetime: events[item.timeCode as keyof OrderEvent]
    }));
  }, [events]);

  const currentStep = useMemo(() => {
    return (
      OrderProgressOptions.findIndex((item) => {
        return item.statusCode === status;
      }) || 0
    );
  }, [status]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {eventOptions.map((item, index) => (
          <div
            key={item.timeCode}
            className={clsx(
              styles.time_node,
              index <= currentStep && styles.active,
              index === currentStep && styles.last
            )}
          >
            <div className={styles.step}>{item.label}</div>
            {!!item.datetime && (
              <div className={styles.datetime}>
                {dayjs(item.datetime).format(DateTimeFormat)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const OrderProgressOptions = [
  {
    label: '下单',
    statusCode: 'pending_payment',
    timeCode: 'createdAt'
  },
  {
    label: '付款',
    statusCode: 'pending_packing',
    timeCode: 'paymentAt'
  },
  {
    label: '配货',
    statusCode: 'pending_shipping',
    timeCode: 'packingAt'
  },
  {
    label: '出库',
    statusCode: 'pending_delivery',
    timeCode: 'shippedAt'
  },
  {
    label: '交易成功',
    statusCode: 'completed',
    timeCode: 'completedAt'
  }
];

const DateTimeFormat = 'MM月DD日 HH:mm';
