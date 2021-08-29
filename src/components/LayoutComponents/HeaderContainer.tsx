import React, { useState, useCallback } from 'react';
import { css } from '@emotion/react';
import { v4 as uuid } from 'uuid';
import { SiteLink } from './SiteLink';
import navData from '@/data/navData';
import size from '@/data/size';
import { MobileSiteLink } from './MobileSiteLink';

export const HeaderContainer = () => {
  const [ isDisplay, setIsDisplay, ] = useState(false);

  const onClickOpen = useCallback(() => {
    if (isDisplay) {
      setIsDisplay(false);
    } else {
      setIsDisplay(true);
    }
  }, [ isDisplay, ]);

  const navState = isDisplay ? 'nav-open' : 'nav-close';
  const menuIcon = isDisplay ? 'f00d' : 'f0c9';

  const style = css`
    background-color: #333333;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    top: 0;
    z-index: 2;

    & > a > img {
      width: 40px;
      height: 40px;
      display: block;
    }

    & > button {
      position: absolute;
      right: 10px;
      height: 40px;
      line-height: 40px;
      border: none;
      background-color: #444444;
      color: #cccccc;
      padding: 0 10px;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        color: #ffffff;
        background-color: #c70000;
      }

      &:before {
        content: '\\${menuIcon}';
        font-family: 'Font Awesome 5 Free', sans-serif;
        font-weight: 900;
      }
    }

    @media (min-width: 1px) and (max-width: 550px) {
      & > nav {
        display: none;
      }

      & > button {
        display: block;
        font-size: ${size[2]};
      }
    }

    @media (min-width: 551px) and (max-width: 900px) {
      & > nav {
        flex: 1;
        text-align: right;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        font-size: ${size[2]};
      }

      & > button {
        display: none;
      }
    }

    @media (min-width: 901px) {
      & > nav {
        flex: 1;
        text-align: right;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        font-size: ${size[3]};
      }

      & > button {
        display: none;
      }
    }
  `;

  const mobileNavStyle = css`
    @media (min-width: 1px) and (max-width: 550px) {
      position: absolute;
      left: 0;
      background-color: #444444;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
      z-index: 1;

      &.nav-open {
        top: 60px;
        transition: all 0.3s;
      }

      &.nav-close {
        top: -500%;
        transition: all 1.0s;
      }

      font-size: ${size[2]};
    }

    @media (min-width: 551px) and (max-width: 900px) {
      display: none;
    }

    @media (min-width: 901px) {
      display: none;
    }
  `;

  return (
    <>
      <header css={style}>
        <a href='https://github.com/NIHILncunia' target='_blank' rel='noreferrer noopener'>
          <img src='/images/site-logo.svg' alt='사이트 로고' />
        </a>
        <button type='button' aria-label='nav-on-off' onClick={onClickOpen} />
        <nav>
          {navData.map(({
            title, url, icon, type, weight,
          }) => (
            <SiteLink
              key={uuid()}
              href={url}
              icon={icon}
              type={type}
              weight={weight}
            >
              {title}
            </SiteLink>
          ))}
        </nav>
      </header>
      <nav className={navState} css={mobileNavStyle}>
        {navData.map(({
          title, url, icon, type, weight,
        }) => (
          <MobileSiteLink
            key={uuid()}
            href={url}
            icon={icon}
            type={type}
            weight={weight}
          >
            {title}
          </MobileSiteLink>
        ))}
      </nav>
    </>
  );
};
