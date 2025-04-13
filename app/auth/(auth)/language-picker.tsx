'use client';

import Dropdown from '@/components/ui/dropdown';
import { Key, useState } from 'react';

const languages = [
  { key: 'zh_CN', label: '中文(简体)' },
  { key: 'zh_TW', label: '中文(繁體)' },
  { key: 'en', label: 'English' }
];

export default function LanguagePicker() {
  const [current, setCurrent] = useState<Key>(() => languages[0].key);

  return (
    <div className={'group mx-2.5 text-[#838383]'}>
      <Dropdown
        menus={languages.filter((item) => item.key !== current)}
        overlayStyle={{ minWidth: 65 }}
        onChange={setCurrent}
      >
        <a className={'group-hover:text-[var(--color-primary)]'}>
          {languages.find((item) => item.key === current)?.label}
        </a>
      </Dropdown>
    </div>
  );
}
