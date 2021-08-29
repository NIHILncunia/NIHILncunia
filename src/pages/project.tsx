import React from 'react';
import { css } from '@emotion/react';
import AppLayout from '@/layouts/AppLayout';
import { ISiteMeta } from '@/types';
import {
  ContentsBox, P, Project, Title
} from '@/components/ContentComponents';

const ProjectPage = () => {
  const style = css``;

  const siteMeta: ISiteMeta = {
    pageTitle: '프로젝트',
    pageURL: '/project',
  };

  return (
    <>
      <AppLayout siteMeta={siteMeta}>
        <div css={style}>
          <ContentsBox bg='eeeeee' pt='100' pb='100'>
            <Title align='center' icon='f009' type='Free' weight='900'>프로젝트 페이지</Title>
            <P cn='justify' top='30'>
              이 페이지는 저의 프로젝트를 소개하는 공간입니다. 토이 프로젝트부터 시작해서 포트폴리오, 그리고 나중에는 다양한 연습작들도 올라올 예정입니다. 지금은 비록 보잘 것 없는 프로젝트 밖에 없으나 점점 채워질 겁니다. 그것이 제가 이 사이트를 만든 이유이기도 하니까요.
            </P>
          </ContentsBox>
          <ContentsBox bg='cccccc' pt='100' pb='100'>
            <Title align='left' icon='f009' type='Free' weight='900'>개인 프로젝트</Title>
            <Project
              title='DiceRoll'
              image='/images/projects/dice-roll.png'
              link='https://thediceroll.githun.io/'
              github='https://github.com/TheDiceRoll/TheDiceRoll'
            >
              DiceRoll은 TRPG를 하면서 생각난 아이디어로 시작됐습니다. 인터넷에서 간단하게 주사위를 굴릴 수 있으면 좋겠다. 라는 생각이 들어서 만들게 된 웹 프로그램입니다. 랜덤한 숫자를 이용한다는 점에서 보잘 것 없는 간단한 프로젝트일 수도 있지만 원하던 것이 상당히 복잡한 구조라서 구현하면서 많은 것을 배웠습니다.<br /><br />

              단언컨대 웹 상에 이 주사위보다 똑똑하거나 기능이 많은 주사위는 존재하지 않을 겁니다. 이 프로그램은 디스코드 봇으로도 만들어둔 상태입니다.
            </Project>
          </ContentsBox>
          <ContentsBox bg='eeeeee' pt='100' pb='100'>
            <Title align='right' icon='f009' type='Free' weight='900'>포트폴리오 프로젝트</Title>
            <P cn='justify' top='30'>
              아직 비어있습니다.
            </P>
          </ContentsBox>
        </div>
      </AppLayout>
    </>
  );
};

export default ProjectPage;
