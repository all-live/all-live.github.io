import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import Layout from '@layout';
import Link from 'next/link';
import { useDebouncedCallback, useThrottler } from '@hooks';
import { RESPONSIVE, STYLE_CONSTANTS } from '@constants';
import { IoChevronDownCircle, IoChevronUpCircle } from 'react-icons/io5';
import Content from '@components/Content';
import DarkMode from '@components/DarkMode';
import Detail from '@components/Detail';
import Footer from '@components/Footer';
import Tabs from '@components/Tabs';

const getPageHeight = () => {
  if (!window) return 0;
  return Math.floor(window.innerHeight - STYLE_CONSTANTS.NAVBAR_HEIGHT);
};

const getContentAvailable = () => {
  if (!window) return false;
  return window.innerWidth > RESPONSIVE.DESKTOP;
};

const Home: NextPage = () => {
  const [isContentAvailabe, setIsContentAvailabe] = useState<boolean>(true);
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
    const throttledEvent = throttleEvent<WheelEvent>({
      callback: onWheelHandler,
      throttleInMs: 120,
      preventDefault: true,
    });

    window.addEventListener('wheel', throttledEvent, { passive: false });

    pageHeight.current = getPageHeight();

    return () => {
      window.removeEventListener('wheel', throttledEvent);
    };
  }, [onWheelHandler]);

  useEffect(() => {
    window.addEventListener('scrolling', onScrollingHandler);
    window.addEventListener('scrollToTop', onResetPageHandler);
    setIsContentAvailabe(getContentAvailable());
    return () => {
      window.removeEventListener('scrolling', onScrollingHandler);
    };
  }, []);

  const pageOddEvenInfo = page % 2 === 0 ? 'even' : 'odd';

  return (
    <Layout>
      <div className="contents">
        <Content>
          <div className="intro">
            <h1 className="allive-slogan text-white">함께하는 세상</h1>
            <h1 className="allive-title text-white">올리브</h1>
            <div className="download-buttons">
              <Link href="https://apps.apple.com/kr/app/%EC%98%AC%EB%A6%AC%EB%B8%8C-allive/id1591382146">
                <a className="download-button" target="_blank">
                  <img src="/images/app-store-white.svg" width={28} height={28} />
                  App Store
                </a>
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=kr.co.alllive.app">
                <a className="download-button" target="_blank">
                  <img src="/images/google-play-white.png" width={24} height={24} />
                  Goole Play
                </a>
              </Link>
            </div>
          </div>

          <div className="fixed-bottom-right">
            <img src="/images/alliver-and-allivia.svg" width={750} height={528} />
          </div>
        </Content>

        {isContentAvailabe && (
          <>
            <Content>
              <Tabs />
            </Content>

            <Content>
              <Detail />
            </Content>

            <Content>
              <DarkMode />
            </Content>
          </>
        )}

        <Content>
          <Footer renderLogo={isContentAvailabe} />
        </Content>
      </div>

      {isContentAvailabe && page !== STYLE_CONSTANTS.MAX_PAGE + 1 && (
        <div className="page-bottom">
          <div className={`page-bottom-button bounce page-${pageOddEvenInfo}`} onClick={onPageChangeClickHandler}>
            다음 페이지
            <IoChevronDownCircle size={24} />
          </div>
        </div>
      )}

      {isContentAvailabe && page === STYLE_CONSTANTS.MAX_PAGE + 1 && (
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
