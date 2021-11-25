import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { TABS } from '@constants';
import { useInView } from 'react-intersection-observer';

const iconProps = { size: 36 };

const Tabs: FC = () => {
  const { ref, inView } = useInView({ threshold: 0.9, triggerOnce: true });
  const tabLoop = useRef<NodeJS.Timer | null>(null);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const onClickHandler = useCallback(
    (index: number) => () => {
      clearLoop();
      setActiveTabIndex(index);
    },
    [],
  );

  const startTabLoop = useCallback(() => {
    tabLoop.current = setInterval(nextTabHandler, 5600);
  }, []);

  const clearLoop = useCallback(() => {
    if (!tabLoop.current) return;
    clearInterval(tabLoop.current);
  }, []);

  const nextTabHandler = useCallback(() => {
    setActiveTabIndex((prev) => (prev + 1) % TABS.length);
  }, []);

  useEffect(() => {
    if (!inView) {
      clearLoop();
      return;
    }
    if (inView) {
      console.log('tabs 이벤트 루프 시작');
      startTabLoop();
    }

    return () => {
      clearLoop();
    };
  }, [inView]);

  return (
    <div className="tabs" ref={ref}>
      {TABS.map((_, index) => (
        <div
          key={_.name}
          className={`tab-image ${activeTabIndex === index ? 'tab-image-visible' : 'tab-image-hidden'}`}
        >
          <img src={`/images/main/tab_${index}.svg`} />
        </div>
      ))}

      <div className="tab-content">
        <div className="tab-content-title">{TABS[activeTabIndex].title}</div>
        <div className="tab-content-subtitle">{TABS[activeTabIndex].subtitle}</div>
        <div className="tab-buttons">
          {TABS.map(({ icon, name }, index) => (
            <div
              onClick={onClickHandler(index)}
              className={`tab-button tab-button-${activeTabIndex === index ? 'active' : ''}`}
              key={name}
            >
              <div className="tab-button-icon">
                {activeTabIndex === index ? icon.active(iconProps) : icon.inActive(iconProps)}
              </div>
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
