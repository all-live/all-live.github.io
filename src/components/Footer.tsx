import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FooterProps {
  renderLogo: boolean;
}

const Footer: FC<FooterProps> = ({ renderLogo }) => (
  <footer>
    {renderLogo && <Image src="/images/allive-logo-white.svg" width={300} height={94} />}
    <div className="card">
      <div className="card-col">
        <h2>About Us</h2>
        <Link href="/teammates">
          <p>
            <a className="card-col-text card-col-link">대표 신정웅</a>
          </p>
        </Link>
        <Link href="/service-policy">
          <p>
            <a className="card-col-text card-col-link">이용약관</a>
          </p>
        </Link>
        <Link href="/privacy-policy">
          <p>
            <a className="card-col-text card-col-link">개인정보처리방침</a>
          </p>
        </Link>
      </div>
      <div className="card-col">
        <h2>CONTACT US</h2>
        <p className="card-col-text">전화 | 010-2169-2142</p>
        <p className="card-col-text">이메일 | sjeong1127@gmail.com</p>
        <p className="card-col-text">주소 | 서울특별시 강남구 도곡동 948-6 7층</p>
      </div>
    </div>
    <div className="copy-right">{'Copyright © 2021 allive-together.com\nAll rights reserved.'}</div>
  </footer>
);

export { Footer };
