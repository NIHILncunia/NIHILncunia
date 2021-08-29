import React from 'react';
import { css } from '@emotion/react';
import size from '@/data/size';

export const ProfileBox = () => {
  const style = css`
    display: flex;
    flex-direction: column;
    background-color: #333333;
    color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-sizing: border-box;
    margin-top: 30px;
    margin-bottom: 30px;

    @media (min-width: 1px) and (max-width: 550px) {
      width: 100%;
      font-size: ${size[1]};

      & > .profile-right {
        & > img {
          width: 100%;
        }
      }
    }

    @media (min-width: 551px) and (max-width: 900px) {
      width: 100%;
      font-size: ${size[2]};

      & > .profile-right {
        & > img {
          width: 300px;
        }
      }
    }

    @media (min-width: 901px) {
      max-width: 960px;
      margin-left: auto;
      margin-right: auto;
      font-size: ${size[3]};

      & > .profile-right {
        & > img {
          width: 400px;
        }
      }
    }

    & > .profile-left {
      order: 2;

      & > .item-name {
        font-weight: 900;
        margin-bottom: 10px;
        margin-left: 10px;
        letter-spacing: -1px;
        color: #df4c4c;
      }

      & > .item-content {
        padding: 10px;
        border-radius: 10px;
        background-color: #444444;
        margin-bottom: 10px;
        letter-spacing: -1px;
        text-align: justify;
        font-weight: 500;
        line-height: 1.8;
        color: #eeeeee;

        &:nth-last-of-type(1) {
          margin-bottom: 0;
        }

        & > a {
          color: #cccccc;
          border: 2px solid #cccccc;
          padding: 0 7px;
          border-radius: 5px;
          display: inline-block;

          &:hover {
            color: #333333;
            background-color: #eeeeee;
            border: 2px solid #eeeeee;
          }

          &:after {
            content: '\\f360';
            font-weight: 900;
            margin-left: 5px;
            font-family: 'Font Awesome 5 Free', sans-serif;
          }
        }
      }
    }

    & > .profile-right {
      margin-bottom: 20px;
      padding: 20px;
      order: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      background-color: #222222;
      border-radius: 10px;
    }
  `;

  return (
    <>
      <div css={style}>
        <div className='profile-left'>
          <p className='item-name'>아이디</p>
          <p className='item-content'>NIHILncunia</p>
          <p className='item-name'>닉네임</p>
          <p className='item-content'>니힐</p>
          <p className='item-name'>취미</p>
          <p className='item-content'>캐릭터 디자인, 소설 창작</p>
          <p className='item-name'>선호 기술</p>
          <p className='item-content'>자바스크립트</p>
          <p className='item-name'>상세</p>
          <p className='item-content'>
            저는 니힐이라는 닉네임으로 활동하고 있고 일본어를 전공했습니다. 취미로는 캐릭터 디자인도 하고 소설도 씁니다. 지금은 웹 개발이라는 부분을 더 파고들고 있습니다. 꾸준히 공부하고 있고 알아가는 중입니다. 제가 프로그래밍을 공부하게 된 계기는 하나입니다. 일본어 학습 사이트를 만들어보기 위해서입니다.<br /><br />

            물론 현재는 물불 가리지 않고 웹 개발 외의 다양한 개발 세계에 대해서도 천천히 공부하고 있는 중입니다. 언젠가는 웹 개발 뿐만 아니라 다른 분야도 발을 들여보고 싶은 게 지금의 작은 소망입니다. 그 전에 웹 개발 세계에 먼저 자리를 잡아야겠지만요.<br /><br />

            저는 자바스크립트를 좋아하고 자바스크립트를 많이 연습해왔습니다. 프론트도 JS를 선호하고 백엔드도 JS를 선호합니다. 물론 그 외에도 다른 언어들을 공부하고 있습니다. 특히나 자바라던지 파이썬이라던지 C#도 해보고 싶기 때문에 공부하고 있습니다.
          </p>
          <p className='item-name'>블로그</p>
          <p className='item-content'>
            <a href='https://nihilog.github.io' target='_blank' rel='noreferrer noopener'>니힐로그</a>
          </p>
        </div>
        <div className='profile-right'>
          <img src='/images/nihil-logo.png' alt='니힐 로고' />
        </div>
      </div>
    </>
  );
};
