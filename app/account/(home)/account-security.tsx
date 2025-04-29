'use client';

import SettingItem from './setting-item';

export default function AccountSecurity() {
  return (
    <ul className={'p-5'}>
      <SettingItem icon={'/account/security.png'} label={'密保问题'} />
      <SettingItem icon={'/account/device.png'} label={'登录设备管理'} />
    </ul>
  );
}
