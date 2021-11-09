import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

const Meta = () => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
      <link rel="preload" href="/fonts/Jalnan.ttf" as="font" crossOrigin="" />
      <link rel="shortcut icon" type="image/png" href="/images/favicon.png" />
    </Head>
    <NextSeo title="올리브 | 홈" openGraph={{ title: '올리브' }} />
  </>
);

export { Meta };
