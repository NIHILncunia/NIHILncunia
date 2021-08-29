import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { IHaveChildren } from '@/types';
import size from '@/data/size';

interface Props extends IHaveChildren {
  href: string;
  outside?: 'true';
}

export const A = ({ href, children, outside, }: Props) => {
  const style = css`
    & > a {
      padding: 2px 7px;
      border-radius: 5px;
      color: #c70000;
      border: 2px solid #c70000;
      font-weight: 500;

      &:hover {
        background-color: #c70000;
        color: #ffffff;
      }

      &:after {
        content: '\\${outside === 'true' ? 'f360' : 'f0c1'}';
        font-weight: 900;
        margin-left: 5px;
        font-family: 'Font Awesome 5 Free', sans-serif;
      }
    }

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
      <p css={style}>
        {
          outside === 'true'
            ? (
              <a href={href} target='_blank' rel='noopener noreferrer'>{children}</a>
            )
            : (
              <Link href={href} passHref>
                <a>{children}</a>
              </Link>
            )
        }
      </p>
    </>
  );
};
