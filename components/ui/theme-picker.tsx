'use client';

import Dropdown from '@/components/ui/dropdown';
import Space from '@/components/ui/space';
import { useTheme } from '@/contexts/theme-context';
import { setUserTheme } from '@/services/theme';
import { Theme } from '@/types/common';
import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon
} from '@heroicons/react/24/outline';
import { ReactNode, startTransition, useState } from 'react';

export default function ThemePicker() {
  const theme = useTheme();
  const [current, setCurrent] = useState<ThemeOption | undefined>(() =>
    getThemeByKey(theme)
  );

  function handleChange(key: Theme) {
    setCurrent(getThemeByKey(key));
    startTransition(async () => {
      await setUserTheme(key);
    });
  }

  return (
    <div className={'group mx-2.5 text-[#838383]'}>
      <Dropdown
        menus={themes.filter((item) => item.key !== current?.key)}
        overlayStyle={{ minWidth: 65 }}
        onChange={handleChange}
      >
        <a
          className={
            '-mb-1 font-extralight group-hover:text-[var(--color-primary)]'
          }
        >
          {current?.label}
        </a>
      </Dropdown>
    </div>
  );
}

interface ThemeOption {
  key: Theme;
  label: ReactNode;
}

const themes: ThemeOption[] = [
  {
    key: 'light',
    label: (
      <Space>
        <SunIcon className={'w-5'} />
        浅色
      </Space>
    )
  },
  {
    key: 'dark',
    label: (
      <Space>
        <MoonIcon className={'w-5'} />
        深色
      </Space>
    )
  },
  {
    key: 'system',
    label: (
      <Space>
        <ComputerDesktopIcon className={'w-5'} />
        自动
      </Space>
    )
  }
];

function getThemeByKey(key: Theme) {
  return themes.find((item) => item.key === key);
}
