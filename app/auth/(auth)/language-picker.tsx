'use client';

import Dropdown from '@/components/ui/dropdown';
import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/services/locale';
import { Key, startTransition, useState } from 'react';

const languages = [
  { key: 'zh-CN', label: '中文(简体)' },
  { key: 'zh-TW', label: '中文(繁體)' },
  { key: 'en', label: 'English' },
  { key: 'ug', label: 'ئۇيغۇرچە' }
];

export default function LanguagePicker() {
  const [current, setCurrent] = useState<Key>(() => languages[0].key);

  return (
    <div className={'group mx-2.5 text-[#838383]'}>
      <Dropdown
        menus={languages.filter((item) => item.key !== current)}
        overlayStyle={{ minWidth: 65 }}
        onChange={(key) => {
          setCurrent(key);

          const authLayout = document.getElementById('auth-layout')!;
          if (key === 'ug') {
            authLayout.dir = 'rtl';
          } else {
            if (authLayout.dir === 'rtl') {
              authLayout.removeAttribute('dir');
            }
          }

          startTransition(async () => {
            await setUserLocale(key as Locale);
          });
        }}
      >
        <a className={'group-hover:text-[var(--color-primary)]'}>
          {languages.find((item) => item.key === current)?.label}
        </a>
      </Dropdown>
    </div>
  );
}
