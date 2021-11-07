import React from 'react';
import type { NextPage } from 'next';
import Layout from '@layout';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="content-wrapper bg-theme">
        <div className="content">
          <div className="content-box">
            <div className="flex-col justify-center w-full h-full">
              <h1 className="allive-slogan text-white">모두가 함께하는 세상</h1>
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
    </Layout>
  );
};

export default Home;
