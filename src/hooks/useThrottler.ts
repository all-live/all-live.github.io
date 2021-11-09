import React, { useCallback, useRef } from 'react';

type Timer = ReturnType<typeof setTimeout>;

interface ThrottleParams<T = Event> {
  callback: (event: T) => void | Promise<void>;
  debouce?: number;
  throttleInMs?: number;
  preventDefault?: boolean;
  stopPropagation?: boolean;
}

const useThrottler = () => {
  const timer = useRef<Timer | null>(null);

  const timeOutCallback = useCallback(
    (callback, event) => () => {
      if (typeof callback !== 'function') {
        console.error('callback is not a function');
        return;
      }
      callback.call(this, event);
      timer.current = null;
    },
    [],
  );

  const throttleEvent = useCallback(
    <T>({ callback, preventDefault = false, stopPropagation = false, throttleInMs = 200 }: ThrottleParams<T>) =>
      (event: Event) => {
        if (preventDefault && typeof event.preventDefault === 'function') {
          event.preventDefault();
        }

        if (stopPropagation && typeof event.stopPropagation === 'function') {
          event.stopPropagation();
        }

        if (timer.current) return;

        timer.current = setTimeout(timeOutCallback(callback, event), throttleInMs);
      },
    [],
  );

  return { throttleEvent };
};

export { useThrottler };
