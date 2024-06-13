import { useEffect, useState } from "react";

function getStorageValue<T>(key: string, defaultValue: T): T {
  const saved = localStorage.getItem(key);
  const initial = saved ? (JSON.parse(saved) as T) : defaultValue;
  return initial;
}

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => {
    return getStorageValue<T>(key, defaultValue);
  });

  useEffect(() => {
    if (value && Array.isArray(value) && value.length === 0) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
};
