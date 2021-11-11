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

  return (
    <div ref={ref} className="content-darkmode">
      <div className="content-darkmode-image">
        <div className={`content-darkmode-image-img`}>
          <Image src="/images/main/tab_0.svg" width={400} height={720} />
        </div>
        <div
          className={`content-darkmode-image-img ${
            isDarkMode ? 'content-darkmode-image-img-show' : 'content-darkmode-image-img-hidden'
          }`}
        >
          <Image src="/images/main/tab_0_dark.svg" width={400} height={720} />
        </div>
      </div>
      {/* 다크모드도 지원 */}
    </div>
  );
};

export { DarkMode };
