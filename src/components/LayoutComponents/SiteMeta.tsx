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
    title, description, URL, author, keywords, image,
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

        <meta property='og:site_name' content={title} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={metaTitle} />
        <meta property='og:description' content={metaDescription} />
        <meta property='og:image' content={`${URL}${image}`} />
        <meta property='og:locale' content='ko_KR' />
        <meta property='og:url' content={URL} />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content={`@${author}`} />
        <meta name='twitter:title' content={metaTitle} />
        <meta name='twitter:creator' content={`@${author}`} />
        <meta name='twitter:description' content={metaDescription} />
        <meta name='twitter:image' content={`${URL}${image}`} />

        <title>{metaTitle}</title>
      </Head>
    </>
  );
};
