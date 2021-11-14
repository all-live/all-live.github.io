import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { useThrottler } from '@hooks';
import { RESPONSIVE, STYLE_CONSTANTS } from '@constants';
import { useRouter } from 'next/router';
import Meta from '@components/Meta';
import Navbar from '@components/Navbar';

interface LayoutProps {
  meta?: ReactNode;
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children, meta }) => {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState<boolean>(false);
  const { throttleEvent } = useThrottler();
  const router = useRouter();

  const onScrollHandler = useCallback(() => {
    if (window.innerWidth < RESPONSIVE.DESKTOP) return;

    setIsNavbarTransparent(window.scrollY > STYLE_CONSTANTS.NAVBAR_HEIGHT);
    window.dispatchEvent(new CustomEvent('scrolling'));
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', throttleEvent<Event>({ callback: onScrollHandler, throttleInMs: 80 }));
  }, []);

  return (
    <>
      {meta || <Meta title="올리브 - Allive Together!" />}
      <Navbar transparent={isNavbarTransparent} router={router} />
      {children}
    </>
  );
};

export default Layout;
