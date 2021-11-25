import React, { useState, useEffect, useRef } from 'react';

const useDebounce = <T>(value: T, delayInMs: number): T => {
  const timer = useRef<NodeJS.Timer | null>(null);
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    if (!value) {
      setDebouncedValue(value);
      return;
    }

    timer.current = setTimeout(() => setDebouncedValue(value), delayInMs);

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [value]);

  return debouncedValue;
};

export { useDebounce };
