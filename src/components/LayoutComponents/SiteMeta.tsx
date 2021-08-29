import React from 'react';
import Head from 'next/head';
import { IConfig, ISiteMeta } from '@/types';

interface Props {
  siteMeta?: ISiteMeta;
  config?: IConfig;
}

export const SiteMeta = ({ siteMeta, config, }: Props) => {
  const { pageTitle, pageURL, pageDescription, } = siteMeta;
  const {
    title, description, URL, author, keywords,
  } = config;

  const metaTitle = `${pageTitle} - ${title}`;
  const metaDescription = pageDescription || description;
  const metaURL = `${URL}${pageURL}`;

  return (
    <>
      <Head>
        <meta name='description' content={metaDescription} />
        <meta name='author' content={author} />
        <meta name='keywords' content={keywords} />
        <link rel='canonical' href={metaURL} />

        <title>{metaTitle}</title>
      </Head>
    </>
  );
};
