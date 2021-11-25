import React from 'react';
import Link from 'next/link';
import Content from '@components/Content';
import { LINKS } from '@constants';

const LandingContent = () => (
  <Content>
    <div className="intro">
      <h1 className="allive-slogan text-white">함께하는 세상</h1>
      <h1 className="allive-title text-white">올리브</h1>
      <div className="download-buttons">
        <Link href={LINKS.APP_STORE}>
          <a className="download-button" target="_blank">
            <img src="/images/app-store-white.svg" className="apple-icon" />
            App Store
          </a>
        </Link>
        <Link href={LINKS.PLAY_STORE}>
          <a className="download-button" target="_blank">
            <img src="/images/google-play-white.png" className="google-play-icon" />
            Goole Play
          </a>
        </Link>
      </div>
    </div>

    <div className="fixed-bottom-right">
      <img src="/images/alliver-and-allivia.svg" />
    </div>
  </Content>
);

export default React.memo(LandingContent);
