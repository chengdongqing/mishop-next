import { useKeyboardEscape } from '@/app/hooks/useKeyboardShortcuts';
import Button from '@/components/ui/button';
import CloseIcon from '@/components/ui/close-icon';
import clsx from 'clsx';
import { PropsWithChildren, ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';
import { createRoot, Root } from 'react-dom/client';
import styles from './styles.module.css';

export interface PopupProps extends PropsWithChildren {
  // 是否弹出
  open: boolean;
  // 标题
  title?: ReactNode;
  // 宽度
  width?: number | string;
  // 底部内容
  footer?: ReactNode;
  // 是否可关闭
  closable?: boolean;
  // 点击蒙层是否可关闭
  maskClosable?: boolean;
  // 确认按钮文本
  okText?: ReactNode;
  // 取消按钮文本
  cancelText?: ReactNode;
  // 点击确定时关闭
  closeOnOk?: boolean;
  // 确定按钮loading
  confirmLoading?: boolean;

  // 点击确认回调
  onOk?: () => void | Promise<void>;
  // 点击取消回调
  onCancel?: () => void;
}

function Popup({
  open,
  title,
  width,
  footer,
  closable = true,
  maskClosable = true,
  okText = '确定',
  cancelText = '取消',
  closeOnOk,
  confirmLoading,
  children,
  onOk,
  onCancel
}: PopupProps) {
  const [closing, setClosing] = useState(false);
  const [loading, setLoading] = useState(false);
  const finalLoading = loading || confirmLoading;

  useKeyboardEscape(close);

  function close() {
    setClosing(true);
    setTimeout(() => {
      onCancel?.();
      setClosing(false);
    }, 500);
  }

  if (!open) {
    return null;
  }

  return createPortal(
    <div className={clsx(styles.popup, closing && styles.closing)}>
      <div style={{ width }} className={styles.container}>
        <div className={clsx(styles.header, !title && styles.headless)}>
          {!!title && <div className={styles.title}>{title}</div>}
          {closable && <CloseIcon onClick={close} />}
        </div>
        <div className={styles.body}>{children}</div>
        {footer !== undefined ? (
          footer
        ) : (
          <div className={styles.footer}>
            <div className={'inline-flex gap-x-3.5'}>
              {!!okText && (
                <Button
                  loading={finalLoading}
                  onClick={() => {
                    const res = onOk?.();
                    if (res instanceof Promise) {
                      setLoading(true);
                      res.then(close).finally(() => {
                        setLoading(false);
                      });
                    } else if (closeOnOk) {
                      close();
                    }
                  }}
                >
                  {okText}
                </Button>
              )}
              {!!cancelText && (
                <Button
                  gray
                  onClick={() => {
                    close();
                  }}
                >
                  {cancelText}
                </Button>
              )}
            </div>
          </div>
        )}
      </div>

      <div
        className={styles.mask}
        onClick={() => {
          if (maskClosable) {
            close();
          }
        }}
      />
    </div>,
    document.getElementById('popup')!
  );
}

let popup: Root | undefined;

function open(
  props: Omit<PopupProps, 'open' | 'children'> & { content?: ReactNode }
) {
  popup?.unmount();
  popup = createRoot(document.getElementById('popup')!);
  popup.render(
    <Popup
      open
      {...props}
      onCancel={() => {
        props.onCancel?.();
        popup?.unmount();
      }}
    >
      {props.content}
    </Popup>
  );

  return () => {
    popup?.unmount();
  };
}

function alert(title: ReactNode, onOk?: () => void) {
  return open({
    width: '48rem',
    content: <div className={styles.message}>{title}</div>,
    maskClosable: false,
    cancelText: null,
    closeOnOk: true,
    closable: false,
    onOk
  });
}

function confirm(
  title: ReactNode,
  props: Omit<PopupProps, 'open' | 'children'>
) {
  return open({
    width: '48rem',
    content: (
      <div className={clsx(styles.message, styles.confirm)}>{title}</div>
    ),
    maskClosable: false,
    closeOnOk: true,
    ...props
  });
}

Popup.open = open;
Popup.alert = alert;
Popup.confirm = confirm;

export default Popup;
