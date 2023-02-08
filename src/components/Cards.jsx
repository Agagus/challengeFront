import React from 'react';
import Card from './Card';
import style from './Cards.module.css';

const Cards = () => {
  return (
    <div className={style.card}>
      <Card />
      <Card />
    </div>
  );
};

export default Cards;
