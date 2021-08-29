import React from 'react';
import { css } from '@emotion/react';
import { IHaveChildren } from '@/types';
import size from '@/data/size';

interface Props extends IHaveChildren {
  align: ('left' | 'right' | 'center');
  icon: string;
  type: string;
  weight: string;
  color?: string;
  Hrole?: ('h2' | 'h3');
}

export const Title = ({
  children, align, icon, type, weight, color, Hrole,
}: Props) => {
  const h3Style = Hrole === 'h3'
    ? css`
      & > span {
        font-size: 80%;
      }
    `
    : '';

  const style = css`
    text-align: ${align};
    font-weight: 900;
    color: #${color || 'c70000'};
    letter-spacing: -1px;
    line-height: 1.5;

    ${h3Style};

    &:before {
      content: '\\${icon}';
      font-family: 'Font Awesome 5 ${type}', sans-serif;
      font-weight: ${weight};
      margin-right: 10px;
      ${Hrole === 'h3' ? 'font-size: 80%;' : ''};
    }

    @media (min-width: 1px) and (max-width: 550px) {
      font-size: ${size[4]};
      width: 100%;
    }

    @media (min-width: 551px) and (max-width: 900px) {
      font-size: ${size[5]};
      width: 100%;
    }

    @media (min-width: 901px) {
      font-size: ${size[6]};
      max-width: 960px;
      margin-left: auto;
      margin-right: auto;
    }
  `;

  return (
    <>
      {
        Hrole === 'h2'
          ? <h2 css={style}>{children}</h2>
          : (
            <h3 css={style}>
              <span>{children}</span>
            </h3>
          )
      }
    </>
  );
};
