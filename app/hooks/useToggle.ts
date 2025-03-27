import { useCallback, useState } from 'react';

export default function useToggle<T = boolean, U = boolean>(
  defaultValue: T = false as T,
  reverseValue?: U
) {
  const [value, setValue] = useState<T | U>(defaultValue);

  const toggleValue = useCallback(() => {
    setValue((v) => {
      return v === defaultValue
        ? ((reverseValue === undefined ? !defaultValue : reverseValue) as T | U)
        : defaultValue;
    });
  }, [defaultValue, reverseValue]);

  return [value, toggleValue] as const;
}
