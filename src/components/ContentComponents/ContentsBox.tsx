import React from 'react';
import { css } from '@emotion/react';
import { IHaveChildren } from '@/types';

interface Props extends IHaveChildren {
  mt?: string;
  mb?: string;
  bg: string;
  pt?: string;
  pb?: string;
}

export const ContentsBox = ({
  children, mt, mb, bg, pt, pb,
}: Props) => {
  const style = css`
    margin-top: ${mt || 0}px;
    margin-bottom: ${mb || 0}px;
    background-color: #${bg};
    padding: ${pt || 20}px 20px ${pb || 20}px 20px;
    width: 100%;
    box-sizing: border-box;
  `;

  return (
    <>
      <div css={style}>{children}</div>
    </>
  );
};
