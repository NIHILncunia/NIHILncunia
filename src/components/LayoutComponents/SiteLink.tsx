import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { IHaveChildren } from '@/types';

interface Props extends IHaveChildren {
  href: string;
  icon: string;
  type: string;
  weight: string;
}

export const SiteLink = ({
  children, href, icon, type, weight,
}: Props) => {
  const style = css`
    color: #cccccc;
    background: #444444;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    font-weight: 500;
    margin-right: 10px;
    border-radius: 5px;

    &:before {
      content: '\\${icon}';
      font-family: 'Font Awesome 5 ${type}';
      font-weight: ${weight};
      margin-right: 5px;
    }

    &:nth-last-of-type(1) {
      margin-right: 0;
    }

    &:hover {
      color: #ffffff;
      background-color: #df4c4c;
    }
  `;

  return (
    <>
      <Link href={href} passHref>
        <a css={style}>{children}</a>
      </Link>
    </>
  );
};
