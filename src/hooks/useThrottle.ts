import React, { useCallback, useRef } from 'react';

interface ThrottleParams<T = unknown> {
  callback: (args: T) => void | Promise<void>;
  timeOutInMS?: number;
}

const useThrottle = () => {
  const isThrottling = useRef(false);

  const timeOutCallback = useCallback(
    (callback, args) => () => {
      if (typeof callback !== 'function') {
        console.error('callback is not a function');
        return;
      }
      callback.call(this, args);
      isThrottling.current = false;
    },
    [],
  );

  const throttle = useCallback(
    <T = unknown>({ callback, timeOutInMS = 200 }: ThrottleParams<T>) =>
      (args: T) => {
        if (isThrottling.current) return;
        isThrottling.current = true;
        setTimeout(timeOutCallback(callback, args), timeOutInMS);
      },
    [],
  );

  return { throttle };
};

export { useThrottle };
