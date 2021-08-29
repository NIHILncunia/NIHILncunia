import React from 'react';
import { css } from '@emotion/react';

interface Props {
  title: string;
  href: string;
  icon: string;
  type: string;
  weight: string;
}

export const FooterLink = ({
  title, href, icon, weight, type
  ,
}: Props) => {
  const style = css`
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    color: #cccccc;
    background-color: #444444;
    margin: 2px;
    font-size: 150%;
    border-radius: 25px;
    align-items: center;
    justify-content: center;

    &:hover {
      color: #ffffff;
      background-color: #df4c4c;
    }

    &:before {
      content: '\\${icon}';
      font-weight: ${weight};
      font-family: 'Font Awesome 5 ${type}', sans-serif;
    }
  `;

  return (
    <>
      <a css={style} href={href} target='_blank' rel='noreferrer noopener' aria-label={title} />
    </>
  );
};
