import React from 'react';
import { css } from '@emotion/react';
import size from '@/data/size';

interface Props {
  lang: string;
  number: number;
  mt?: string;
  mb?: string;
}

export const SkillBar = ({
  lang, number, mt, mb,
}: Props) => {
  const style = css`
    margin-top: ${mt || 0}px;
    margin-bottom: ${mb || 0}px;
    display: flex;
    flex-direction: row;

    & > .lang-name {
      background-color: #333333;
      color: #ffffff;
      padding: 5px 10px;
      display: inline-block;
      width: 120px;
      text-align: center;
      margin-right: 10px;
      border-radius: 5px;
      letter-spacing: -1px;
    }

    & > .lang-percentage {
      flex: 1;
      background-color: #33333350;
      border-radius: 5px;
      display: flex;
      flex-direction: row;

      & > .lang-bar {
        background-color: #df4c4c;
        width: ${number}%;
        border-radius: 5px;
        color: #ffffff;
        text-align: right;
        padding: 5px 10px;
        box-sizing: border-box;
        font-weight: 900;
        letter-spacing: -1px;
      }
    }

    @media (min-width: 1px) and (max-width: 550px) {
      font-size: ${size[1]};
      width: 100%;
    }

    @media (min-width: 551px) and (max-width: 900px) {
      font-size: ${size[2]};
      width: 100%;
    }

    @media (min-width: 901px) {
      font-size: ${size[3]};
      margin-left: auto;
      margin-right: auto;
      max-width: 960px;
    }
  `;

  return (
    <>
      <p css={style}>
        <span className='lang-name'>{lang}</span>
        <span className='lang-percentage'>
          <span className='lang-bar'>{number}%</span>
        </span>
      </p>
    </>
  );
};
