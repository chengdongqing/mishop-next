import { useCallback, useState } from 'react';

type InitialState<T> = T | (() => T);
export type SetStateAction<T> = Partial<T> | ((prevState: T) => Partial<T>);

export default function useSetState<T extends Record<string, unknown>>(
  initialState: InitialState<T> = {} as T
) {
  const [state, setState] = useState<T>(initialState);

  const setMergedState = useCallback(
    (patch: SetStateAction<T>, overwrite = false) => {
      setState((prevState) => {
        const nextState =
          typeof patch === 'function' ? patch(prevState) : patch;
        return (
          overwrite
            ? nextState
            : {
                ...prevState,
                ...nextState
              }
        ) as T;
      });
    },
    []
  );

  return [state, setMergedState] as const;
}
