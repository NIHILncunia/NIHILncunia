import React from 'react';
import { css } from '@emotion/react';
import { IHaveChildren } from '@/types';
import size from '@/data/size';

interface Props extends IHaveChildren {
  top?: string;
  bottom?: string;
  cn?: string;
  color?: string;
  point?: string[];
}

export const P = ({
  children, top, bottom, cn, color, point,
}: Props) => {
  const style = css`
    margin-top: ${top || 0}px;
    margin-bottom: ${bottom || 0}px;
    font-weight: 500;
    color: #${color || '333333'};
    letter-spacing: -1px;
    line-height: 1.8;

    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }

    & > strong {
      padding: 0 7px;
      background-color: #${point ? point[0] : 'c70000'};
      border-radius: 5px;
      color: #${point ? point[1] : 'ffffff'};
    }

    &.justify {
      text-align: justify;
    }

    &.center {
      text-align: center;
    }

    &.left {
      text-align: left;
    }

    &.right {
      text-align: right;
    }

    &.normal {}

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
      max-width: 960px;
      margin-left: auto;
      margin-right: auto;
    }
  `;

  return (
    <>
      <p css={style} className={cn || 'normal'}>{children}</p>
    </>
  );
};
