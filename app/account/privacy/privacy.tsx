'use client';

import popup from '@/components/ui/popup';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Privacy({ action }: { action?: 'delete' }) {
  useEffect(() => {
    if (action === 'delete') {
      handleDeleteAccount();
    }
  }, [action]);

  function handleDeleteAccount() {
    popup.confirm(
      <>
        确定注销吗？
        <br />
        <span className={'text-sm text-[var(--color-error)]'}>
          将永久删除小米账号及其下所有数据并永远无法恢复!
        </span>
      </>,
      {
        onOk() {}
      }
    );
  }

  return (
    <ul>
      <PrivacyItem
        icon={'/account/privacy/data.png'}
        label={'管理您的数据'}
        description={
          '从小米提供的服务或App中下载或删除与您的小米账号相关的数据'
        }
      />
      <PrivacyItem
        icon={'/account/privacy/logoff.png'}
        label={'注销账号'}
        description={'永久删除小米账号及其下所有数据并永远无法恢复'}
        onClick={handleDeleteAccount}
      />
      <PrivacyItem
        icon={'/account/privacy/revoke.png'}
        label={'撤回同意隐私政策'}
        description={
          '撤回对隐私政策的同意，将永久删除小米账号及其下所有数据并永远无法恢复'
        }
      />
      <PrivacyItem
        icon={'/account/privacy/download.png'}
        label={'下载小米账号个人资料'}
        description={'下载您在小米账号中的个人信息和相关设置'}
      />
    </ul>
  );
}

function PrivacyItem({
  icon,
  label,
  description,
  onClick
}: {
  icon: string;
  label: string;
  description: string;
  onClick?: () => void;
}) {
  return (
    <li
      className={clsx('m-[48_40] flex items-center justify-between', {
        'cursor-pointer': !!onClick
      })}
      onClick={onClick}
    >
      <div className={'flex gap-x-2.5'}>
        <Image
          src={icon}
          alt={'icon'}
          width={30}
          height={30}
          className={'h-[30] w-[30]'}
        />
        <div>
          <h4 className={'mb-1 text-base text-[#666]'}>{label}</h4>
          <p className={'text-[#999]'}>{description}</p>
        </div>
      </div>
      <ChevronRightIcon className={'w-6 text-[silver] rtl:rotate-180'} />
    </li>
  );
}
