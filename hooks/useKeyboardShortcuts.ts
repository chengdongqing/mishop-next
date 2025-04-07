import useLatest from '@/hooks/useLatest';
import { useEffect } from 'react';

function useKeyboardEvent(
  key: string,
  onKeyAction: () => void,
  modifierKeys = false,
  checkInputFocused = true
) {
  const onKeyActionRef = useLatest(onKeyAction);

  useEffect(() => {
    function onKeydown(e: KeyboardEvent) {
      if (checkInputFocused && hasInputFocused()) return;

      if (e.key === key && (!modifierKeys || e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onKeyActionRef.current();
      }
    }

    window.addEventListener('keydown', onKeydown);

    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  }, [checkInputFocused, key, modifierKeys, onKeyActionRef]);
}

export function useKeyboardDelete(onDelete: () => void) {
  useKeyboardEvent('Delete', onDelete);
}

export function useKeyboardSelectAll(onSelectAll: () => void) {
  useKeyboardEvent('a', onSelectAll, true);
}

export function useKeyboardSave(onSave: () => void) {
  useKeyboardEvent('s', onSave, true, false);
}

export function useKeyboardEscape(onEscape: () => void) {
  useKeyboardEvent('Escape', onEscape);
}

function hasInputFocused() {
  const activeElement = document.activeElement;
  return activeElement && ['INPUT', 'TEXTAREA'].includes(activeElement.tagName);
}
