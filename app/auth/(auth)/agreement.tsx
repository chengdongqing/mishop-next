'use client';

export default function Agreement() {
  return (
    <span className={'text-[rgba(0,0,0,.6)] dark:text-[hsla(0,0%,100%,.5)]'}>
      已阅读并同意小米账号
      <a
        href={
          'https://cn.account.xiaomi.com/about/protocol/agreement?_locale=zh_CN'
        }
        target={'_blank'}
        rel={'noopener noreferrer'}
        className={
          'hover:text-primary text-[rgba(0,0,0,.8)] duration-200 dark:text-[hsla(0,0%,100%,.8)]'
        }
        onClick={(e) => e.stopPropagation()}
      >
        用户协议
      </a>
      和
      <a
        href={
          'https://cn.account.xiaomi.com/about/protocol/privacy?_locale=zh_CN'
        }
        target={'_blank'}
        rel={'noopener noreferrer'}
        className={
          'hover:text-primary text-[rgba(0,0,0,.8)] duration-200 dark:text-[hsla(0,0%,100%,.8)]'
        }
        onClick={(e) => e.stopPropagation()}
      >
        隐私政策
      </a>
    </span>
  );
}
