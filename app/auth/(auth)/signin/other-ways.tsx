'use client';

import Space from '@/components/ui/space';
import { AlipayIcon, QQIcon, WeChatIcon, WeiboIcon } from './icons';

export default function OtherWays() {
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
