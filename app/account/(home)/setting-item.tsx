import { ChevronRightIcon } from '@heroicons/react/16/solid';
import clsx from 'clsx';
import Image from 'next/image';

interface Props {
  icon: string;
  label: string;
  value?: string | null;
  onClick?: () => void;
}

export default function SettingItem({ icon, label, value, onClick }: Props) {
  return (
    <li
      className={clsx('flex items-center justify-between p-[15_20] text-base', {
        'cursor-pointer': !!onClick
      })}
      onClick={onClick}
    >
      <div className={'flex items-center'}>
        <Image
          src={icon}
          alt={''}
          width={30}
          height={30}
          className={'h-[30] w-[30]'}
        />
        <h4 className={'ms-2.5'}>{label}</h4>
      </div>
      <div className={'flex items-center gap-x-2.5'}>
        {!!value && <span dir={'ltr'}>{value}</span>}
        <ChevronRightIcon className={'w-6 text-[silver] rtl:rotate-180'} />
      </div>
    </li>
  );
}
