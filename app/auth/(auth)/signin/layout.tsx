import {
  AlipayIcon,
  QQIcon,
  WeChatIcon,
  WeiboIcon
} from '@/app/auth/(auth)/signin/(password)/icons';
import Space from '@/components/ui/space';
import { PropsWithChildren } from 'react';

export default function SignInLayout({ children }: PropsWithChildren) {
  return (
    <div className={'px-0.5 pt-5'}>
      {children}
      <OtherWays />
    </div>
  );
}

function OtherWays() {
  const iconClass = 'w-[46] cursor-pointer';

  return (
    <div className={'mt-2.5'}>
      <h4 className={'text-center text-base leading-[40px] text-[#aaa]'}>
        其他方式登录
      </h4>
      <div className={'mt-2.5 flex justify-center'}>
        <Space size={24}>
          <AlipayIcon className={iconClass} />
          <WeChatIcon className={iconClass} />
          <QQIcon className={iconClass} />
          <WeiboIcon className={iconClass} />
        </Space>
      </div>
    </div>
  );
}

export function Agreement() {
  return (
    <span className={'text-[rgba(0,0,0,.6)]'}>
      已阅读并同意小米账号
      <a
        href={
          'https://cn.account.xiaomi.com/about/protocol/agreement?_locale=zh_CN'
        }
        target={'_blank'}
        rel={'noopener noreferrer'}
        className={'text-[rgba(0,0,0,.8)]'}
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
        className={'text-[rgba(0,0,0,.8)]'}
      >
        隐私政策
      </a>
    </span>
  );
}
