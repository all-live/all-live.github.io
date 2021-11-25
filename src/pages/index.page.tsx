import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import Layout from '@layout';

import { useDebouncedCallback, useThrottler } from '@hooks';
import { RESPONSIVE, STYLE_CONSTANTS } from '@constants';
import { IoChevronDownCircle, IoChevronUpCircle } from 'react-icons/io5';

import Footer from '@components/Footer';
import DesktopContents from '@components/DesktopContents';
import LandingContent from '@components/LandingContent';

const getPageHeight = () => {
  if (!window) return 0;
  return Math.floor(window.innerHeight - STYLE_CONSTANTS.NAVBAR_HEIGHT);
};

const getDesktopAvailable = () => {
  if (!window) return false;
  return window.innerWidth > RESPONSIVE.DESKTOP;
};

const Home: NextPage = () => {
  const [isDesktopAvailable, setIsDesktopAvailable] = useState<boolean>(true);
  const { throttleEvent } = useThrottler();
  const pageHeight = useRef<number>(0);
  const [page, setPage] = useState<number>(0);
  const isScrolling = useRef<boolean>(false);
  const { debounceCallback } = useDebouncedCallback();

  const onWheelHandler = useCallback(
    (event: WheelEvent) => {
      if (isScrolling.current) return;

      const direction = event.deltaY > 0 ? 'positive' : 'negative';
      const adder = direction === 'positive' ? 1 : -1;

      switch (true) {
        case page < 0:
          setPage(0);
          break;
        case page > STYLE_CONSTANTS.MAX_PAGE && adder > 0:
          break;
        default:
          setPage(page + adder);
      }
    },
    [page],
  );

  const onDoneScrollHandler = useCallback(() => {
    isScrolling.current = false;
  }, []);

  const onScrollingHandler = useCallback(() => {
    isScrolling.current = true;
    debounceCallback({ callback: onDoneScrollHandler, delayInMs: 1000 });
  }, []);

  const onPageChangeClickHandler = useCallback(() => {
    if (isScrolling.current) return;
    setPage((prev) => prev + 1);
  }, []);

  const onResetPageHandler = useCallback(() => {
    setPage(0);
  }, []);

  useEffect(() => {
    const topOffset = pageHeight.current * page;
    window.scroll({ top: topOffset, behavior: 'smooth' });
  }, [page]);

  useEffect(() => {
    const throttledWheelEvent = throttleEvent<WheelEvent>({
      callback: onWheelHandler,
      throttleInMs: 500,
      preventDefault: true,
    });

    window.addEventListener('wheel', throttledWheelEvent, { passive: false });

    pageHeight.current = getPageHeight();

    return () => {
      window.removeEventListener('wheel', throttledWheelEvent);
    };
  }, [onWheelHandler]);

  useEffect(() => {
    window.addEventListener('scrolling', onScrollingHandler);
    window.addEventListener('scrollToTop', onResetPageHandler);

    setIsDesktopAvailable(getDesktopAvailable());

    return () => {
      window.removeEventListener('scrolling', onScrollingHandler);
      window.removeEventListener('scrollToTop', onResetPageHandler);
    };
  }, []);

  const pageOddEvenInfo = page % 2 === 0 ? 'even' : 'odd';

  return (
    <Layout>
      <div className="contents">
        <LandingContent />
        {isDesktopAvailable && <DesktopContents />}
        <Footer renderLogo={isDesktopAvailable} />
      </div>

      {isDesktopAvailable && page !== STYLE_CONSTANTS.MAX_PAGE + 1 && (
        <div className="page-bottom">
          <div className={`page-bottom-button bounce page-${pageOddEvenInfo}`} onClick={onPageChangeClickHandler}>
            다음 페이지
            <IoChevronDownCircle size={24} />
          </div>
        </div>
      )}

      {isDesktopAvailable && page === STYLE_CONSTANTS.MAX_PAGE + 1 && (
        <div className="page-bottom">
          <div className={`page-bottom-button bounce page-${pageOddEvenInfo}`} onClick={onResetPageHandler}>
            첫 페이지로
            <IoChevronUpCircle size={24} />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default React.memo(Home);
