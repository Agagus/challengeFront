import React, { useState } from 'react';
import style from './Search.module.css';

const Search = ({ search, card }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    console.log(input);
  };

  return (
    <div className={style.container}>
      <input
        className={style.input}
        placeholder='Busca tu personaje'
        type='text'
        value={input}
        onChange={handleChange}
      ></input>
      <button className={style.button} onClick={() => search(input, card)}>
        Search
      </button>
    </div>
  );
};

export default Search;
