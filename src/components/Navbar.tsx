import React, { FC, useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RESPONSIVE } from '@constants';
import { NextRouter } from 'next/router';
import { IoMenu } from 'react-icons/io5';

interface NavbarProps {
  transparent: boolean;
  router: NextRouter;
}

const getLogoSize = () => {
  if (!window) return { width: 0, height: 0 };
  switch (true) {
    case window.innerWidth > RESPONSIVE.TABLET:
      return { width: 120, height: 38 };
    default:
      return { width: 80, height: 25 };
  }
};

const ROUTES = [
  { pathname: 'privacy-policy', name: '개인정보 처리방침' },
  { pathname: 'service-policy', name: '이용약관' },
  { pathname: 'teammates', name: '팀원소개' },
];

type LogoSize = { width: number; height: number };

const Navbar: FC<NavbarProps> = ({ transparent, router }) => {
  const [logoSize, setLogoSize] = useState<LogoSize>({ width: 0, height: 0 });
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const onLogoClickHandler = useCallback(() => {
    if (router.pathname === '/') {
      window.dispatchEvent(new CustomEvent('scrollToTop'));
      return;
    }
    router.push('/');
  }, []);

  const toggleMenuHandler = useCallback(() => setIsMenuOpened((prev) => !prev), []);

  useEffect(() => {
    setLogoSize(getLogoSize());
  }, []);

  return (
    <nav className={`navbar navbar-${transparent ? 'transparent' : 'primary'}`}>
      <div className="content">
        <div className="navbar-content">
          <a onClick={onLogoClickHandler} className="logo">
            {!isMenuOpened && !transparent && <Image src="/images/allive-logo-white.svg" {...logoSize} />}
            {transparent && <Image src="/images/allive-logo-green.svg" {...logoSize} />}
            {isMenuOpened && <Image src="/images/allive-logo-green.svg" {...logoSize} />}
          </a>

          <div className={`navbar-links navbar-links-${isMenuOpened ? 'opened' : 'closed'}`}>
            <div className={`menu menu-${isMenuOpened ? 'opened' : 'closed'}`} onClick={toggleMenuHandler}>
              <IoMenu size={30} />
            </div>
            {ROUTES.map((route) => (
              <Link href={`/${route.pathname}`} key={route.pathname}>
                <a>
                  <h2
                    className={`sub-title ${
                      route.pathname === router.pathname.split('/')[1] ? 'sub-title-active' : ''
                    }`}
                  >
                    {route.name}
                  </h2>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
