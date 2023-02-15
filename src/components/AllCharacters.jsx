import React, { useState } from 'react';
import style from './AllCharacters.module.css';
import List from './List';

const AllCharacters = ({ characters }) => {
  const [button, setButton] = useState(false);

  const handleClick = () => {
    setButton(true);
  };

  return (
    <div className={style.container}>
      <button onClick={handleClick} className={style.button}>
        Personajes
      </button>
      {button === true && <List characters={characters} />}
    </div>
  );
};

export default AllCharacters;
