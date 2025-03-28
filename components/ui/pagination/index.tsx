'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useMemo } from 'react';
import styles from './styles.module.css';

interface PaginationProps {
  current?: number;
  pageSize?: number;
  totalSize?: number;

  onChange?(page: number): void;
}

export default function Pagination({
  current = 1,
  pageSize = 10,
  totalSize = 10,
  onChange
}: PaginationProps) {
  const pages = useMemo(() => {
    return totalSize > 0 ? Math.ceil(totalSize / pageSize) : 0;
  }, [pageSize, totalSize]);

  const middlePages = useMemo(() => {
    if (pages <= 2) {
      return [];
    }

    let startPage = current - 2;
    let endPage = current + 2;

    if (startPage <= 1) {
      endPage -= startPage - 2;
      startPage = 2;
    }
    if (endPage >= pages) {
      startPage -= endPage - pages + 1;
      endPage = pages - 1;
    }

    startPage = Math.max(startPage, 2);
    endPage = Math.min(endPage, pages - 1);

    const items = [];
    for (let i = startPage; i <= endPage; i++) {
      items.push(i);
    }
    return items;
  }, [current, pages]);

  const hasPrevMore = useMemo(() => {
    return middlePages.length > 0 && middlePages[0] > 2;
  }, [middlePages]);

  const hasNextMore = useMemo(() => {
    return (
      middlePages.length > 0 && middlePages[middlePages.length - 1] < pages - 1
    );
  }, [middlePages, pages]);

  function handleChange(page: number) {
    if (page !== current) {
      onChange?.(page);
    }
  }

  return (
    <div className={'py-[30] text-center'}>
      <div className={'inline-flex gap-x-2.5'}>
        {/* 左箭头 */}
        <span
          className={clsx(styles.item, current <= 1 && styles.disabled)}
          onClick={() => {
            if (current > 1) {
              handleChange(current - 1);
            }
          }}
        >
          <ChevronLeftIcon className={'w-6'} />
        </span>

        <ul className={'flex gap-x-2.5'}>
          {/* 第一页 */}
          <li
            className={clsx(styles.item, current === 1 && styles.active)}
            onClick={() => {
              handleChange(1);
            }}
          >
            1
          </li>
          {/* 左侧省略页 */}
          {hasPrevMore && (
            <li className={clsx(styles.item, styles.disabled)}>...</li>
          )}
          {/* 中间页 */}
          {middlePages.map((item) => (
            <li
              key={item}
              className={clsx(styles.item, current === item && styles.active)}
              onClick={() => {
                handleChange(item);
              }}
            >
              {item}
            </li>
          ))}
          {/* 右侧省略页 */}
          {hasNextMore && (
            <li className={clsx(styles.item, styles.disabled)}>...</li>
          )}
          {/* 最后一页 */}
          {pages > 1 && (
            <li
              className={clsx(styles.item, current === pages && styles.active)}
              onClick={() => {
                handleChange(pages);
              }}
            >
              {pages}
            </li>
          )}
        </ul>

        {/* 右箭头 */}
        <span
          className={clsx(styles.item, current >= pages && styles.disabled)}
          onClick={() => {
            if (current < pages) {
              handleChange(current + 1);
            }
          }}
        >
          <ChevronRightIcon className={'w-6'} />
        </span>
      </div>
    </div>
  );
}
