import { useCallback, useRef } from 'react';

export const useDebounce = (
  callback: (...args: any[]) => void,
  delay?: number,
) => {
  const DELAY = Math.min(Math.max(0, delay ?? 1), 5);

  const ref = useRef<number>();

  const cancel = () => {
    clearTimeout(ref.current);
  };

  const handler = useCallback((...args: any[]) => {
    cancel();
    ref.current = setTimeout(callback, DELAY * 1000, ...args);
  }, []);

  return [handler, cancel];
};
