import UserLayout from '@/components/ui/user-layout';
import { getUserInfo } from '@/services/users';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const title = '个人中心';

export const metadata: Metadata = {
  title
};

export default function UserCenterPage() {
  return (
    <UserLayout label={title}>
      <UserInfo />
      <CountInfo />
    </UserLayout>
  );
}

async function UserInfo() {
  const userInfo = (await getUserInfo())!;

  return (
    <div
      className={
        'border-primary flex items-center justify-between border-b-1 pt-6 pb-[40]'
      }
    >
      <div className={'flex items-center'}>
        <Image
          src={userInfo.avatarUrl}
          alt={'user avatar'}
          width={160}
          height={160}
          className={'border-primary h-[160] w-[160] rounded-full border-1 p-1'}
        />
        <div className={'ms-5'}>
          <h3 className={'text-2xl text-[#616161]'}>
            {userInfo.name ?? userInfo.phone}
          </h3>
          <div className={'mb-2.5 text-[#b0b0b0]'}>{currentPeriod()}好～</div>
          <Link
            target={'_blank'}
            href={'/account/profile'}
            className={'text-primary text-xs'}
          >
            修改个人信息 {'>'}
          </Link>
        </div>
      </div>
      <div className={'flex flex-col gap-y-[6] text-[#757575]'}>
        <div>
          <span>账户安全：</span>
          <span className={'text-[var(--color-success)]'}>较高</span>
        </div>
        <div>
          <span>绑定手机：</span>
          <span>{userInfo.phone}</span>
        </div>
        <div>
          <span>绑定邮箱：</span>
          <span>{userInfo.email ?? '--'}</span>
        </div>
      </div>
    </div>
  );
}

function CountInfo() {
  return <div></div>;
}

function currentPeriod() {
  const hours = new Date().getHours();
  const periods = ['凌晨', '上午', '下午', '晚上'];
  return periods[Math.floor(hours / 6)];
}
