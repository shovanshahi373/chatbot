import { useEffect, useState } from 'react';

export const useStorage = <T>(key: string, value: T | null) => {
  const [val, setVal] = useState(() => {
    const item = localStorage.getItem(key);
    if (item == null) return value;
    return JSON.parse(item) as T;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val));
  }, [val]);

  const destroy = () => {
    setVal(null);
  };

  return {
    currentValue: val,
    setValue: setVal,
    clearValue: destroy,
  };
};
