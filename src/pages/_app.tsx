import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import config from '@/data/blog.config';

const App = ({ Component, pageProps, }: AppProps) => (
  <>
    <Head>
      <meta charSet='UTF-8' />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0'
      />

      <meta name='robots' content='All' />
      <meta name='robots' content='index, follow' />
      <meta name='NaverBot' content='All' />
      <meta name='NaverBot' content='index, follow' />
      <meta name='Yeti' content='All' />
      <meta name='Yeti' content='index, follow' />

      <link rel='shortcut icon' type='image/x-icon' href={`${config.URL}/favicon.ico`} />
      <link rel='icon' type='image/x-icon' href={`${config.URL}/favicon.ico`} />
      <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.15.4/css/all.css' />

      <meta name='google-site-verification' content='iIK1QMzAYU9YHlIbkvglYdu5GF4WsxIBaV_geNrPVMI' />
      <meta name='naver-site-verification' content='cd2125585e215c0da6cc75f4692f48d1991e394e' />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
