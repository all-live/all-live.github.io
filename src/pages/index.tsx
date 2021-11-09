import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import Layout from '@layout';
import Image from 'next/image';
import { useThrottler } from '@hooks';
import { STYLE_CONSTANTS } from '@constants';

const getPageHeight = () => {
  if (!window) return 0;
  return Math.floor(window.innerHeight - STYLE_CONSTANTS.NAVBAR_HEIGHT);
};

// type Direction = 'positive' | 'negative';

const Home: NextPage = () => {
  const { throttleEvent } = useThrottler();
  const pageHeight = useRef<number>(0);
  const prevDelatY = useRef<number>(0);
  const [page, setPage] = useState<number>(0);

  const onWheelHandler = useCallback(
    (event: WheelEvent) => {
      const momentum = Math.abs(event.deltaY) - Math.abs(prevDelatY.current);
      prevDelatY.current = event.deltaY;

      if (momentum < STYLE_CONSTANTS.MIN_WHEEL_MOMENTUM) return;

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

  useEffect(() => {
    const topOffset = pageHeight.current * page;
    window.scroll({ top: topOffset, behavior: 'smooth' });
  }, [page]);

  useEffect(() => {
    const throttledEvent = throttleEvent<WheelEvent>({
      callback: onWheelHandler,
      throttleInMs: 200,
      preventDefault: true,
    });

    window.addEventListener('wheel', throttledEvent, { passive: false });

    pageHeight.current = getPageHeight();
    return () => {
      window.removeEventListener('wheel', throttledEvent);
    };
  }, [onWheelHandler]);

  return (
    <Layout>
      <div className="content-wrapper bg-theme">
        <div className="content">
          <div className="content-box">
            <div className="flex-col justify-center w-full h-full">
              <h1 className="allive-slogan text-white">함께하는 세상</h1>
              <h1 className="allive-title text-white">올리브</h1>
              <div className="flex-row">
                <div className="download-button">
                  <Image src="/images/app-store-white.svg" width={28} height={28} />
                  App Store
                </div>
                <div className="download-button">
                  <Image src="/images/google-play-white.png" width={24} height={24} />
                  Goole Play
                </div>
              </div>
            </div>

            <div className="fixed-bottom-right">
              <Image src="/images/alliver-and-allivia.svg" width={750} height={528} />
            </div>
          </div>
        </div>
      </div>

      <div className="content-wrapper bg-white">
        <div className="content">
          <div className="content-box"></div>
        </div>
      </div>

      <div className="content-wrapper bg-theme">
        <div className="content">
          <div className="content-box"></div>
        </div>
      </div>

      <div className="content-wrapper bg-white">
        <div className="content">
          <div className="content-box"></div>
        </div>
      </div>

      <div className="content-wrapper bg-theme">
        <div className="content">
          <div className="content-box"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
