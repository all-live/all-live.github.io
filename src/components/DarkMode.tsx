import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const DarkMode: FC = () => {
  const darkmodeTimer = useRef<NodeJS.Timer | null>(null);
  const { ref, inView } = useInView({ threshold: 0.9, triggerOnce: true });
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const activateDarkModeHandler = useCallback(() => {
    setIsDarkMode(true);
  }, []);

  const toggleDarkModeHandler = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  const onChangeHandler = useCallback(() => {
    // TODO
  }, []);

  useEffect(() => {
    if (!inView) {
      if (darkmodeTimer.current) clearTimeout(darkmodeTimer.current);
      return;
    }

    darkmodeTimer.current = setTimeout(activateDarkModeHandler, 1000);

    return () => {
      if (darkmodeTimer.current) clearTimeout(darkmodeTimer.current);
    };
  }, [inView]);

  return (
    <div ref={ref} className="content-darkmode">
      <div className="content-darkmode-image">
        <div className="content-darkmode-image-img">
          <img
            src="/images/main/tab_0.svg"
            className={isDarkMode ? 'content-darkmode-image-img-hidden' : 'content-darkmode-image-img-visible'}
          />
          <img
            src="/images/main/tab_0_dark.svg"
            className={isDarkMode ? 'content-darkmode-image-img-visible' : 'content-darkmode-image-img-hidden'}
          />
        </div>
      </div>
      <div className="content-darkmode-guide">
        <h1>다크모드도 지원 👌</h1>
        <label className="switch">
          <input type="checkbox" onClick={toggleDarkModeHandler} onChange={onChangeHandler} checked={isDarkMode} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default DarkMode;
