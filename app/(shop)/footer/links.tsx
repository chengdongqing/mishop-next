import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

export default function Links() {
  return (
    <div className={'w-primary flex py-10'}>
      <Left />
      <div className={'h-[80px] border-r-1 border-r-[var(--color-border)]'} />
      <Right />
    </div>
  );
}

function Left() {
  return (
    <div className={'flex flex-1 justify-center'}>
      {links.map((link) => (
        <dl key={link.title} className={'w-[160px]'}>
          <dt className={'mb-[26px] text-sm text-[#424242]'}>{link.title}</dt>
          {link.children.map((child) => (
            <dd key={child.title} className={'mt-[10px]'}>
              <a
                rel={'nofollow'}
                target={'_blank'}
                href={child.href}
                className={
                  'text-xs text-[#757575] hover:text-[var(--color-primary)]'
                }
              >
                {child.title}
              </a>
            </dd>
          ))}
        </dl>
      ))}
    </div>
  );
}

function Right() {
  return (
    <div className={'flex w-[245px] flex-col items-center'}>
      <div className="mb-6 text-center">
        <p className="text-primary text-[22px]">950816</p>
        <p className="text-xs">8:00-18:00（仅收市话费）</p>
        <ChatButton />
      </div>
      <div className={'w-[200px] text-center'}>
        <p className="text-primary text-[22px]">950818</p>
        <p className="text-xs">
          8:00-18:00（仅收市话费）
          <br />
          <span className={'my-1 inline-block'}>
            手机适用于：Xiaomi MIX Fold系列、MIX Flip系列、数字12系列及以上
          </span>
          <br />
          电视适用于：98寸、100寸电视
        </p>
        <ChatButton />
      </div>
    </div>
  );
}

function ChatButton() {
  return (
    <button
      className={clsx(
        'text-primary mt-2 inline-flex h-[30px] w-[120px] cursor-pointer items-center justify-center border border-[var(--color-primary)] text-xs',
        'duration-200 hover:bg-[var(--color-primary)] hover:text-white'
      )}
    >
      <ChatBubbleLeftEllipsisIcon className={'mr-1 inline w-3.5'} />
      人工客服
    </button>
  );
}

type LinkType = {
  title: string;
  children: {
    title: string;
    href?: string;
  }[];
};

const links: LinkType[] = [
  {
    title: '选购指南',
    children: [
      {
        title: '手机',
        href: 'https://www.mi.com/search?keyword=%E6%89%8B%E6%9C%BA'
      },
      {
        title: '电视',
        href: 'https://www.mi.com/search?keyword=%E7%94%B5%E8%A7%86'
      },
      {
        title: '笔记本',
        href: 'https://www.mi.com/search?keyword=%E7%AC%94%E8%AE%B0%E6%9C%AC'
      },
      {
        title: '平板',
        href: 'https://www.mi.com/search?keyword=%E5%B9%B3%E6%9D%BF'
      },
      {
        title: '穿戴',
        href: 'https://www.mi.com/search?keyword=%E6%99%BA%E8%83%BD%E7%A9%BF%E6%88%B4'
      },
      {
        title: '耳机',
        href: 'https://www.mi.com/search?keyword=%E8%80%B3%E6%9C%BA'
      },
      {
        title: '家电',
        href: 'https://www.mi.com/search?keyword=%E5%AE%B6%E7%94%B5'
      },
      {
        title: '路由器',
        href: 'https://www.mi.com/search?keyword=%E8%B7%AF%E7%94%B1%E5%99%A8'
      },
      {
        title: '音箱',
        href: 'https://www.mi.com/search?keyword=%E9%9F%B3%E7%AE%B1'
      },
      {
        title: '配件',
        href: 'https://www.mi.com/search?keyword=%E9%85%8D%E4%BB%B6'
      }
    ]
  },
  {
    title: '服务中心',
    children: [
      {
        title: '申请售后',
        href: 'https://www.mi.com/service/aftersale/front'
      },
      {
        title: '售后政策',
        href: 'https://www.mi.com/service/exchange#phone'
      },
      {
        title: '维修服务价格',
        href: 'https://www.mi.com/service/materialprice'
      },
      {
        title: '订单查询',
        href: 'https://www.mi.com/user/orderList'
      },
      {
        title: '以旧换新',
        href: 'https://www.mi.com/a/h/16769.html'
      },
      {
        title: '保障服务',
        href: 'https://api.jr.mi.com/activity/scene/scenePCsearch.html?from=search'
      },
      {
        title: '防伪查询',
        href: 'https://www.mi.com/service/imei'
      },
      {
        title: 'F码通道',
        href: 'https://www.mi.com/order/fcode'
      }
    ]
  },
  {
    title: '线下门店',
    children: [
      {
        title: '小米之家',
        href: 'https://www.mi.com/service/mihome/list'
      },
      {
        title: '服务网点',
        href: 'https://www.mi.com/service/sitelist'
      },
      {
        title: '授权体验店/专区',
        href: 'https://www.mi.com/service/family-location'
      }
    ]
  },
  {
    title: '关于小米',
    children: [
      {
        title: '了解小米',
        href: 'https://www.mi.com/about/'
      },
      {
        title: '加入小米',
        href: 'https://hr.xiaomi.com/'
      },
      {
        title: '投资者关系',
        href: 'https://ir.mi.com/zh-hans'
      },
      {
        title: '可持续发展',
        href: 'https://www.mi.com/csr'
      },
      {
        title: '廉洁举报',
        href: 'https://www.mi.com/integrity'
      }
    ]
  },
  {
    title: '关注我们',
    children: [
      {
        title: '新浪微博',
        href: 'https://weibo.com/xiaomishangcheng'
      },
      {
        title: '官方微信'
      },
      {
        title: '联系我们',
        href: 'https://www.mi.com/about/contact/'
      },
      {
        title: '公益基金会',
        href: 'https://www.mi.com/foundation/index'
      }
    ]
  }
];
