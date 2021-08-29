import React from 'react';
import { css } from '@emotion/react';
import { IHaveChildren } from '@/types';
import size from '@/data/size';

interface Props extends IHaveChildren {
  title: string;
  image: string;
  link: string;
  github: string;
}

export const Project = ({
  title, image, children, link, github,
}: Props) => {
  const style = css`
    margin-top: 30px;
    margin-bottom: 30px;
    background-color: #333333;
    padding: 20px;
    border-radius: 10px;

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

    & > .project-title {
      font-size: 130%;
      padding: 10px;
      background-color: #444444;
      color: #ffffff;
      border-radius: 10px;
      font-weight: 900;
      margin-bottom: 20px;
    }

    & > .project-body {
      display: flex;
      flex-direction: column;

      & > .project-left {
        order: 2;

        & > p {
          padding: 10px;
          background-color: #444444;
          color: #eeeeee;
          border-radius: 10px;
          font-weight: 500;
          text-align: justify;
          letter-spacing: -1px;
          margin-bottom: 20px;
        }

        & > a {
          padding: 10px;
          text-align: center;
          font-weight: 500;
          color: #666666;
          background-color: #cccccc;
          display: block;
          border-radius: 10px;
          margin-bottom: 10px;

          &:nth-last-of-type(1) {
            margin-bottom: 0;
          }

          &:hover {
            color: #ffffff;
            background-color: #df4c4c;
            font-weight: 900;
          }

          &:after {
            content: '\\f360';
            font-weight: 900;
            margin-left: 5px;
            font-family: 'Font Awesome 5 Free', sans-serif;
          }
        }
      }

      & > .project-right {
        order: 1;
        margin-bottom: 20px;

        & > img {
          width: 100%;
          border-radius: 10px;
          border: 5px solid #ffffff;
          box-sizing: border-box;
        }
      }
    }
  `;

  return (
    <>
      <div css={style}>
        <p className='project-title'>{title}</p>
        <div className='project-body'>
          <div className='project-left'>
            <p>{children}</p>
            <a href={link} target='_blank' rel='noreferrer noopener'>{title} 바로가기!</a>
            <a href={github} target='_blank' rel='noreferrer noopener'>{title} 깃허브!</a>
          </div>
          <div className='project-right'>
            <img src={image} alt={title} />
          </div>
        </div>
      </div>
    </>
  );
};
