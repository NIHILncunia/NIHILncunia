import React from 'react';
import { css } from '@emotion/react';
import AppLayout from '@/layouts/AppLayout';
import { ISiteMeta } from '@/types';

const NotPonud404 = () => {
  const style = css`

  `;

  const siteMeta: ISiteMeta = {
    pageTitle: '에러 404',
    pageURL: '/404',
  };

  return (
    <>
      <AppLayout siteMeta={siteMeta}>
        <div css={style}>404 에러 페이지</div>
      </AppLayout>
    </>
  );
};

export default NotPonud404;
