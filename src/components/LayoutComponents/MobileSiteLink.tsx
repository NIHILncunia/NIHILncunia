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

export const MobileSiteLink = ({
  children, href, icon, type, weight,
}: Props) => {
  const style = css`
    display: block;
    color: #ffffff;
    background-color: #555555;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
    text-align: center;

    &:before {
      content: '\\${icon}';
      font-family: 'Font Awesome 5 ${type}';
      font-weight: ${weight};
      margin-right: 5px;
    }

    &:nth-last-of-type(1) {
      margin-bottom: 0;
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
