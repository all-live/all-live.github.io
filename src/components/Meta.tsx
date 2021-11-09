import React, { FC } from 'react';
import Head from 'next/head';
import { NextSeo, NextSeoProps } from 'next-seo';

const Meta: FC<NextSeoProps> = (props) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
      <link rel="preload" href="/fonts/Jalnan.ttf" as="font" crossOrigin="" />
      <link rel="shortcut icon" type="image/png" href="/images/favicon.png" />
    </Head>
    <NextSeo {...props} />
  </>
);

export { Meta };
