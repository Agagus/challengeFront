import React from 'react';
import style from './Search.module.css';

const Search = () => {
  return (
    <div className={style.container}>
      <input className={style.input} placeholder='Busca tu personaje'></input>
      <button className={style.button}>Search</button>
    </div>
  );
};

export default Search;
