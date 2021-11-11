import React, { FC, useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const DarkMode: FC = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const activateDarkModeHandler = useCallback(() => {
    setIsDarkMode(true);
  }, []);

  useEffect(() => {
    if (!inView) return;
    setTimeout(activateDarkModeHandler, 1000);
  }, [inView]);

  const toggleDarkModeHandler = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  const onChangeHandler = useCallback(() => {
    // TODO
  }, []);

  return (
    <div ref={ref} className="content-darkmode">
      <div className="content-darkmode-image">
        <div className="content-darkmode-image-img">
          <Image src="/images/main/tab_0.svg" width={500} height={897} />
        </div>
        <div
          className={`content-darkmode-image-img ${
            isDarkMode ? 'content-darkmode-image-img-show' : 'content-darkmode-image-img-hidden'
          }`}
        >
          <Image src="/images/main/tab_0_dark.svg" width={500} height={897} />
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

export { DarkMode };
