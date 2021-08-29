import React from 'react';
import { css } from '@emotion/react';
import { ISiteMeta } from '@/types';
import AppLayout from '@/layouts/AppLayout';
import {
  A,
  ContentsBox, P, Strong, Title
} from '@/components/ContentComponents';

const IndexPage = () => {
  const style = css``;

  const siteMeta: ISiteMeta = {
    pageTitle: '홈',
    pageURL: '/',
  };

  return (
    <>
      <AppLayout siteMeta={siteMeta}>
        <div css={style}>
          <ContentsBox bg='eeeeee' pt='100' pb='100'>
            <Title align='center' icon='f075' type='Free' weight='900'>방문해주셔서 감사합니다!</Title>
            <P cn='justify' top='30'>
              이 사이트를 찾아주신 여러분 환영합니다! 저는 <Strong>니힐</Strong>이라는 사람이고 웹 개발자가 되기 위해 웹 프로그래밍을 공부하면서 발버둥치고 있습니다. 이 사이트는 저를 소개하고 알리기 위해 만들어짐과 동시에 제가 만드는 프로젝트를 기록하기도 하는 공간이기 때문에 단순히 포트폴리오를 기록하는 용도는 아닙니다.
            </P>
            <P cn='justify' top='30'>
              이 페이지에서는 다른 페이지들의 설명을 하고 있습니다. 하단에는 연락이 가능한 사이트와 함께 블로그도 링크되어있습니다.
            </P>
          </ContentsBox>
          <ContentsBox bg='cccccc' pt='100' pb='100'>
            <Title align='left' icon='f05a' type='Free' weight='900'>소개 페이지</Title>
            <P cn='justify' top='30' bottom='30'>
              소개 페이지는 저를 소개하는 것을 목적으로 하는 페이지입니다. 저의 간단한 프로필과 제가 가진 기술, 그리고 어떤 언어를 선호하는가 같은 것들에 대한 정보를 얻을 수 있습니다.
            </P>
            <A href='/about'>소개 페이지로 바로가기</A>
          </ContentsBox>
          <ContentsBox bg='eeeeee' pt='100' pb='100'>
            <Title align='right' icon='f009' type='Free' weight='900'>프로젝트 페이지</Title>
            <P cn='justify' top='30' bottom='30'>
              프로젝트 페이지에는 작은 토이 프로젝트부터 시작해서 포트폴리오를 포함한 웹 프로젝트들이 기록되는 곳입니다. 경우에 따라서는 블로그 글과 연결시켜두기도 할 예정입니다. 지속적으로 업데이트 될 듯 합니다.
            </P>
            <A href='/project'>프로젝트 페이지로 바로가기</A>
          </ContentsBox>
          <ContentsBox bg='cccccc' pt='100' pb='100'>
            <Title align='center' icon='f37d' type='Brands' weight='900'>블로그 안내!</Title>
            <P cn='justify' top='30' bottom='30'>
              블로그를 운영하고 있습니다. Next.js로 구축한 블로그고 아직 글이 얼마 없는 상태인데 천천히 하나 하나 업데이트 하고 있습니다. 프로그래밍 관련된 것들이 주로 올라오는 블로그가 될 것이고, 점점 많아질 것 같습니다. 블로그에는 프로젝트와 관련된 글들도 올라올 예정입니다.
            </P>
            <A href='https://nihilog.github.io/' outside='true'>블로그 바로가기</A>
          </ContentsBox>
        </div>
      </AppLayout>
    </>
  );
};

export default IndexPage;
