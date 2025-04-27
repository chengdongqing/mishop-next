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
          <button title={'切换为深色主题'}>
            <AlipayIcon className={iconClass} />
          </button>
          <button title={'切换为浅色主题'}>
            <WeChatIcon className={iconClass} />
          </button>
          <button title={'自适应系统主题'}>
            <QQIcon className={iconClass} />
          </button>
          <button>
            <WeiboIcon className={iconClass} />
          </button>
        </Space>
      </div>
    </div>
  );
}
