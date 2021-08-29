import React from 'react';
import { css } from '@emotion/react';
import { IHaveChildren } from '@/types';

export const MainContainer = ({ children, }: IHaveChildren) => {
  const style = css`
    background-color: #cccccc;

    & > div#contents {
      padding-top: 60px;
    }
  `;

  return (
    <>
      <main css={style}>
        <div id='contents'>
          {children}
        </div>
      </main>
    </>
  );
};
