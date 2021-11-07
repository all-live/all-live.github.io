import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NavbarProps {
  transparent: boolean;
}

const Navbar: FC<NavbarProps> = ({ transparent }) => (
  <nav className={`navbar navbar-${transparent ? 'transparent' : 'primary'}`}>
    <div className="content">
      <div className="navbar-content">
        {!transparent && <Image src="/images/allive-logo-white.svg" width={144} height={45} className="logo" />}
        {transparent && <Image src="/images/allive-logo-green.svg" width={144} height={45} />}

        <div className="flex-row">
          <Link href="/service-policy">
            <h2 className="sub-title">개인정보 처리 방침</h2>
          </Link>
          <h2 className="sub-title">이용약관</h2>
          <h2 className="sub-title">팀원소개</h2>
        </div>
      </div>
    </div>
  </nav>
);

export { Navbar };
