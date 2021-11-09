import React, { useState, useEffect, useCallback, useRef } from 'react';

interface DebounceCallbackParams {
  callback: () => void;
  delayInMs: number;
}

type Timer = ReturnType<typeof setTimeout>;

const useDebouncedCallback = () => {
  // const callbackRef = useRef();
  const callbackTimer = useRef<Timer | null>(null);

  const debounceCallback = useCallback((params: DebounceCallbackParams) => {
    const { callback, delayInMs } = params;

    if (typeof callback !== 'function') {
      console.error('debounce callback is not a function');
      return;
    }

    if (callbackTimer.current) {
      clearTimeout(callbackTimer.current);
    }

    callbackTimer.current = setTimeout(callback, delayInMs);
  }, []);

  return { debounceCallback };
};

export { useDebouncedCallback };
