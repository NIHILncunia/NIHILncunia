import React from 'react';
import { css } from '@emotion/react';
import { IHaveChildren } from '@/types';

export const Strong = ({ children, }: IHaveChildren) => {
  const style = css`
    font-weight: 900;
  `;

  return (
    <>
      <strong css={style}>{children}</strong>
    </>
  );
};
