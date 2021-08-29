import React from 'react';
import { css, Global } from '@emotion/react';
import {
  FooterContainer,
  HeaderContainer, MainContainer, SiteMeta
} from '@/components/LayoutComponents';
import { ISiteMeta } from '@/types';
import config from '@/data/blog.config';

interface Props {
  children: React.ReactNode;
  siteMeta: ISiteMeta;
}

const AppLayout = ({ children, siteMeta, }: Props) => {
  const globalStyle = css`
    @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);

    * {
      margin: 0;
      padding: 0;
      font-family: 'Noto Sans KR', sans-serif;
    }

    a {
      text-decoration: none;
    }

    ul {
      list-style: none;
    }

    img {
      display: block;
    }

    #__next {
      position: relative;
    }
  `;

  return (
    <>
      <Global styles={globalStyle} />
      <SiteMeta config={config} siteMeta={siteMeta} />
      <HeaderContainer />

      <MainContainer>
        {children}
      </MainContainer>

      <FooterContainer />
    </>
  );
};

export default AppLayout;
