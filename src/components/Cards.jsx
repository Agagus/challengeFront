import React, { useEffect, useState } from 'react';
import Card from './Card';
import style from './Cards.module.css';
// const axios = require('axios');
// import * as axios from 'axios';

const Cards = () => {
  return (
    <div className={style.card}>
      {/* {
        all.map(char => )
      } */}
      <Card />
      <Card />
    </div>
  );
};

export default Cards;
