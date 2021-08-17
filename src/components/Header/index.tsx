import React, { useEffect, useState } from 'react';
import css from './Header.module.css';

const themes = ['light', 'dark'];
const getThemeName = (isDark: boolean): string => themes[Number(isDark)];

const Header = () => {
  const [dark, setDark] = useState<boolean>(true);

  useEffect(() => {
    if ('color-scheme' in localStorage) {
      setDark(localStorage.getItem('color-scheme') === 'dark')
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDark(true);
    } else {
      setDark(true);
    }
  }, []);

  useEffect(() => {
    document.body.setAttribute('color-scheme', getThemeName(dark));
    localStorage.setItem('color-scheme', getThemeName(dark));
  }, [dark]);

  return (
    <header>
      <h1 id={css.main}>
        <a href="whatson">
          <span id={css.cyan}>bbirthda</span>y <span id={css.magenta}>ffrin</span>g<span id={css.yellow}>e</span>
        </a>
      </h1>
      <button id={css.theme} type="button" onClick={() => setDark(!dark)}>
        {getThemeName(!dark)}
      </button>
    </header>
  )
};

export default Header;

