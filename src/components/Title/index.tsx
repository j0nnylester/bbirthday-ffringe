import React from 'react';
import css from './Title.module.css';

const Title = () => (
  <h1 id={css.main}>
    <a href="whatson">
      <span id={css.cyan}>bbirthda</span>y <span id={css.magenta}>ffrin</span>g<span id={css.yellow}>e</span>
    </a>
  </h1>
);

export default Title;
