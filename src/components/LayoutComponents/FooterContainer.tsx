import React from 'react';
import { css } from '@emotion/react';
import { v4 as uuid } from 'uuid';
import size from '@/data/size';
import { FooterLink, Strong } from '../ContentComponents';
import linkData from '@/data/linkData';

export const FooterContainer = () => {
  const style = css`
    padding: 10px;
    background-color: #333333;
    user-select: none;

    & > .links {
      text-align: center;
      display: flex;
      justify-content: center;
      margin-bottom: 5px;
      box-sizing: border-box;
    }

    & > p {
      color: #ffffff;
      text-align: center;

      &:before {
        content: '\\f1f9';
        font-family: 'Font Awesome 5 Free', sans-serif;
        font-weight: 500;
        margin-right: 5px;
      }

      @media (min-width: 1px) and (max-width: 550px) {
        font-size: ${size[1]};
      }

      @media (min-width: 551px) and (max-width: 900px) {
        font-size: ${size[2]};
      }

      @media (min-width: 901px) {
        font-size: ${size[3]};
      }
    }
  `;

  const nowYear = new Date().getFullYear();
  const year = nowYear - 2021 === 0 ? `${nowYear}` : `2021-${nowYear}`;

  return (
    <>
      <footer css={style}>
        <div className='links'>
          {linkData.map(({
            title, href, icon, type, weight
            ,
          }) => (
            <FooterLink key={uuid()} href={href} title={title} icon={icon} type={type} weight={weight} />
          ))}
        </div>
        <p>{year}. <Strong>NIHILncunia.</Strong></p>
      </footer>
    </>
  );
};
