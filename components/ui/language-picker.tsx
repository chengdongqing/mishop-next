'use client';

import Dropdown from '@/components/ui/dropdown';
import { setUserLocale } from '@/services/locale';
import { Locale } from '@/types/common';
import { startTransition, useState } from 'react';
import { useLocale } from 'use-intl';

export default function LanguagePicker() {
  const local = useLocale() as Locale;
  const [current, setCurrent] = useState<LangOption | undefined>(() =>
    getLanguageByKey(local)
  );

  function handleChange(key: Locale) {
    setCurrent(getLanguageByKey(key));
    startTransition(async () => {
      await setUserLocale(key);
    });
  }

  return (
    <div className={'group mx-2.5 text-[#838383]'}>
      <Dropdown
        menus={languages.filter((item) => item.key !== current?.key)}
        overlayStyle={{ minWidth: 65 }}
        onChange={handleChange}
      >
        <a
          className={'font-extralight group-hover:text-[var(--color-primary)]'}
        >
          {current?.label}
        </a>
      </Dropdown>
    </div>
  );
}

interface LangOption {
  key: Locale;
  label: string;
}

const languages: LangOption[] = [
  { key: 'zh-CN', label: '中文(简体)' },
  { key: 'zh-TW', label: '中文(繁體)' },
  { key: 'en', label: 'English' },
  { key: 'ug', label: 'ئۇيغۇرچە' }
];

function getLanguageByKey(key: Locale) {
  return languages.find((item) => item.key === key);
}
