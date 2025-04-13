'use client';

import { LoadingIcon } from '@/components/icons';
import {
  CheckCircleIcon,
  InformationCircleIcon
} from '@heroicons/react/16/solid';
import {
  ExclamationCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { CSSProperties } from 'react';
import { createRoot, Root } from 'react-dom/client';
import styles from './styles.module.css';

const types = {
  warning: {
    icon: <ExclamationCircleIcon className={'w-5'} />,
    color: 'var(--color-primary)'
  },
  success: {
    icon: <CheckCircleIcon className={'w-5'} />,
    color: 'var(--color-success)'
  },
  info: {
    icon: <InformationCircleIcon className={'w-5'} />,
    color: '#1677ff'
  },
  error: {
    icon: <XCircleIcon className={'w-5'} />,
    color: 'var(--color-error)'
  },
  loading: {
    icon: <LoadingIcon className={'w-5'} />,
    color: 'var(--color-primary)'
  }
};

interface ToastProps {
  type: 'warning' | 'success' | 'info' | 'error' | 'loading';
  content: string;
  style?: CSSProperties;
  className?: string;
}

function Toast({ type, content, style, className }: ToastProps) {
  return (
    <div style={style} className={clsx(styles.container, className)}>
      <span className={styles.icon} style={{ color: types[type].color }}>
        {types[type].icon}
      </span>
      {content}
    </div>
  );
}

interface OpenToastProps extends ToastProps {
  duration?: number;

  onClose?(): void;
}

let toast: Root | undefined, timeoutId: NodeJS.Timeout | undefined;

function open({ duration = 3000, onClose, ...rest }: OpenToastProps) {
  toast?.unmount();
  toast = createRoot(document.getElementById('toast') as HTMLElement);
  clearTimeout(timeoutId);
  toast.render(<Toast {...rest} />);
  if (duration > 0) {
    timeoutId = setTimeout(() => {
      toast?.unmount();
      onClose?.();
    }, duration);
  }
  return () => {
    toast?.unmount();
  };
}

type ToastType = Omit<OpenToastProps, 'type' | 'content'>;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  warning(content: string, props?: ToastType) {
    return open({
      type: 'warning',
      content,
      ...props
    });
  },
  success(content: string, props?: ToastType) {
    return open({
      type: 'success',
      content,
      ...props
    });
  },
  info(content: string, props?: ToastType) {
    return open({
      type: 'info',
      content,
      ...props
    });
  },
  error(content: string, props?: ToastType) {
    return open({
      type: 'error',
      content,
      ...props
    });
  },
  loading(content = '加载中...', props?: ToastType) {
    return open({
      type: 'loading',
      content,
      duration: props?.duration || 0,
      ...props
    });
  }
};
