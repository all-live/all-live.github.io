import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { Navbar, Meta } from '@components';
import { useThrottler } from '@hooks';
import { STYLE_CONSTANTS } from '@constants';

interface LayoutProps {
  meta?: ReactNode;
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children, meta }) => {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState<boolean>(false);
  const { throttleEvent } = useThrottler();

  const onScrollHandler = useCallback(() => {
    setIsNavbarTransparent(window.scrollY > STYLE_CONSTANTS.NAVBAR_HEIGHT);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', throttleEvent<Event>({ callback: onScrollHandler }));
  }, []);

  return (
    <>
      {meta || <Meta />}
      <Navbar transparent={isNavbarTransparent} />
      {children}
    </>
  );
};

export default Layout;
