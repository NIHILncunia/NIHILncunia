import React from 'react';
import { css } from '@emotion/react';
import { ISiteMeta } from '@/types';
import AppLayout from '@/layouts/AppLayout';
import {
  ContentsBox, P, ProfileBox, SkillBar, Strong, Title
} from '@/components/ContentComponents';

const AboutPage = () => {
  const style = css``;

  const siteMeta: ISiteMeta = {
    pageTitle: '소개',
    pageURL: '/about',
  };

  return (
    <>
      <AppLayout siteMeta={siteMeta}>
        <div css={style}>
          <ContentsBox bg='cccccc' pt='100' pb='100'>
            <Title align='center' icon='f05a' type='Free' weight='900'>Who Am I?</Title>
            <P cn='justify' top='30'>
              이 페이지는 <Strong>니힐</Strong>이라는 사람에 대한 본격적인 소개를 하는 페이지입니다. 기본적인 프로필을 준비해두었고, 어떤 프로그래밍 지식을 갖고 있는지 수치로 간략하게 나타내두었습니다. 프로젝트나 포트폴리어가 궁금하신 분들은 이 소개 페이지에는 포트폴리오 같은 것은 없기 때문에 프로젝트 페이지로 가시면 됩니다.
            </P>
          </ContentsBox>
          <ContentsBox bg='eeeeee' pt='100' pb='100'>
            <Title align='left' icon='f406' type='Free' weight='900'>간략 프로필</Title>
            <ProfileBox />
          </ContentsBox>
          <ContentsBox bg='cccccc' pt='100' pb='100'>
            <Title align='left' icon='f121' type='Free' weight='900'>기술</Title>
            <P cn='left' top='30' bottom='30'>
              이 파트에서는 제가 가진 기술을 얼마나 구사할 수 있는가에 대한 수치를 보여줍니다. 자바스크립트 관련된 라이브러리, 프레임워크가 주를 이룹니다. 물론 중요한 것은 수치가 아니라 실제로 얼마나 구사할 수 있는가이기 때문에 포트폴리오를 준비하고 있습니다.
            </P>
            <Title align='left' icon='f121' type='Free' weight='900' Hrole='h3'>웹 개발 기본</Title>
            <SkillBar lang='HTML' number={90} mt='20' mb='5' />
            <SkillBar lang='CSS' number={90} mt='5' mb='5' />
            <SkillBar lang='JAVASCRIPT' number={85} mt='5' mb='5' />
            <SkillBar lang='TYPESCRIPT' number={58} mt='5' mb='20' />

            <Title align='left' icon='f121' type='Free' weight='900' Hrole='h3'>프론드 엔드</Title>
            <SkillBar lang='REACT' number={75} mt='20' mb='5' />
            <SkillBar lang='NEXTJS' number={55} mt='5' mb='5' />
            <SkillBar lang='VUE' number={65} mt='5' mb='5' />
            <SkillBar lang='SCSS' number={60} mt='5' mb='20' />

            <Title align='left' icon='f121' type='Free' weight='900' Hrole='h3'>백 엔드</Title>
            <SkillBar lang='NODEJS' number={55} mt='20' mb='5' />
            <SkillBar lang='EXPRESSJS' number={43} mt='5' mb='5' />
            <SkillBar lang='NESTJS' number={35} mt='5' mb='20' />

            <Title align='left' icon='f121' type='Free' weight='900' Hrole='h3'>학습중</Title>
            <SkillBar lang='PYTHON' number={30} mt='20' mb='5' />
            <SkillBar lang='JAVA' number={35} mt='5' mb='5' />
            <SkillBar lang='C#' number={25} mt='5' mb='20' />
          </ContentsBox>
        </div>
      </AppLayout>
    </>
  );
};

export default AboutPage;
