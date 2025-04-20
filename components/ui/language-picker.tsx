'use client';

import Dropdown from '@/components/ui/dropdown';
import { setUserLocale } from '@/services/locale';
import { Locale } from '@/types/common';
import { Key, startTransition, use, useState } from 'react';

export default function LanguagePicker({
  getLocalePromise
}: {
  getLocalePromise: Promise<Locale>;
}) {
  const local = use(getLocalePromise);
  const [current, setCurrent] = useState<Lang | undefined>(() =>
    getLanguageByKey(local)
  );

  function handleLanguageChange(key: Key) {
    setCurrent(getLanguageByKey(key as Locale));
    startTransition(async () => {
      await setUserLocale(key as Locale);
    });
  }

  return (
    <div className={'group mx-2.5 text-[#838383]'}>
      <Dropdown
        menus={languages.filter((item) => item.key !== current?.key)}
        overlayStyle={{ minWidth: 65 }}
        onChange={handleLanguageChange}
      >
        <a className={'group-hover:text-[var(--color-primary)]'}>
          {current?.label}
        </a>
      </Dropdown>
    </div>
  );
}

interface Lang {
  key: Locale;
  label: string;
}

const languages: Lang[] = [
  { key: 'zh-CN', label: '中文(简体)' },
  { key: 'zh-TW', label: '中文(繁體)' },
  { key: 'en', label: 'English' },
  { key: 'ug', label: 'ئۇيغۇرچە' }
];

function getLanguageByKey(key: Locale) {
  return languages.find((item) => item.key === key);
}
