import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RESPONSIVE } from '@constants';
import { NextRouter, useRouter } from 'next/router';

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

  const onLogoClickHandler = useCallback(() => {
    if (router.pathname === '/') {
      window.dispatchEvent(new CustomEvent('scrollToTop'));
      return;
    }
    router.push('/');
  }, []);

  useEffect(() => {
    setLogoSize(getLogoSize());
  }, []);

  return (
    <nav className={`navbar navbar-${transparent ? 'transparent' : 'primary'}`}>
      <div className="content">
        <div className="navbar-content">
          <a onClick={onLogoClickHandler}>
            {!transparent && <Image src="/images/allive-logo-white.svg" {...logoSize} className="logo" />}
            {transparent && <Image src="/images/allive-logo-green.svg" {...logoSize} className="logo" />}
          </a>

          <div className="flex-row">
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

export { Navbar };
