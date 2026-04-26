import { useEffect, useState } from "react";

function getStorageValue<T>(key: string, defaultValue: T): T {
  const saved = localStorage.getItem(key);

  if (!saved) {
    return defaultValue;
  }

  try {
    return JSON.parse(saved) as T;
  } catch {
    localStorage.removeItem(key);
    return defaultValue;
  }
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
