import React from 'react';
import style from './Random.module.css';

const Random = ({ random, card, characters }) => {
  return (
    <div>
      <button className={style.random} onClick={() => random(card, characters)}>
        Random
      </button>
    </div>
  );
};

export default Random;
