import { useState, useEffect } from 'react';

const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    if (!value) {
      setDebouncedValue(value);
      return;
    }
    const timeOutHandler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeOutHandler);
  }, [delay, value]);

  return debouncedValue;
};

export { useDebounce };
