'use client';

import SettingItem from '@/app/account/(home)/setting-item';
import { useUserInfo } from '@/contexts/user-info-context';

export default function AccountLinks() {
  const userInfo = useUserInfo()!;

  return (
    <ul className={'p-5'}>
      <SettingItem
        icon={'/account/phone.png'}
        label={'安全手机'}
        value={`+86 ${userInfo.phone}`}
      />
      <SettingItem
        icon={'/account/email.png'}
        label={'安全邮箱'}
        value={userInfo.email}
      />
      <SettingItem icon={'/account/password.png'} label={'修改密码'} />
      <SettingItem icon={'/account/account.png'} label={'第三方账号'} />
    </ul>
  );
}
