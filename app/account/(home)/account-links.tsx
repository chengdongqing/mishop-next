'use client';

import openAccountModifyPopup from '@/app/account/(home)/account-modify';
import openPasswordModifyPopup from '@/app/account/(home)/password-modify';
import popup from '@/components/ui/popup';
import { useUserInfo } from '@/contexts/user-info-context';
import SettingItem from './setting-item';

export default function AccountLinks() {
  const userInfo = useUserInfo()!;

  return (
    <ul className={'p-5'}>
      <SettingItem
        icon={'/account/phone.png'}
        label={'安全手机'}
        value={`+86 ${userInfo.phone}`}
        onClick={() =>
          openAccountModifyPopup('phoneNumber', () => {
            popup.alert('手机号修改成功！');
          })
        }
      />
      <SettingItem
        icon={'/account/email.png'}
        label={'安全邮箱'}
        value={userInfo.email}
        onClick={() =>
          openAccountModifyPopup('email', () => {
            popup.alert('邮箱修改成功！');
          })
        }
      />
      <SettingItem
        icon={'/account/password.png'}
        label={'修改密码'}
        onClick={() =>
          openPasswordModifyPopup(() => {
            popup.alert('密码修改成功！');
          })
        }
      />
      <SettingItem icon={'/account/account.png'} label={'第三方账号'} />
    </ul>
  );
}
