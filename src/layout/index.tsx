import React, { FC, ReactNode } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

interface LayoutProps {
  meta?: ReactNode;
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
      <link rel="preload" href="/fonts/Jalnan.ttf" as="font" crossOrigin="" />
    </Head>
    <NextSeo title="올리브" openGraph={{ title: '올리브' }} />
    {children}
  </>
);

export default Layout;
