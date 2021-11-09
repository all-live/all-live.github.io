import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { Navbar, Meta } from '@components';
import { useThrottler } from '@hooks';
import { STYLE_CONSTANTS } from '@constants';
import { useRouter } from 'next/router';

interface LayoutProps {
  meta?: ReactNode;
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children, meta }) => {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState<boolean>(false);
  const { throttleEvent } = useThrottler();
  const router = useRouter();

  const onScrollHandler = useCallback(() => {
    setIsNavbarTransparent(window.scrollY > STYLE_CONSTANTS.NAVBAR_HEIGHT);
    window.dispatchEvent(new CustomEvent('scrolling'));
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', throttleEvent<Event>({ callback: onScrollHandler, throttleInMs: 80 }));
  }, []);

  return (
    <>
      {meta || <Meta title="올리브" />}
      <Navbar transparent={isNavbarTransparent} router={router} />
      {children}
    </>
  );
};

export default Layout;
