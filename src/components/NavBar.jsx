import React from 'react';
import Search from './Search';
import style from './NavBar.module.css';
import Random from './Random';
import AllCharacters from './AllCharacters';

const NavBar = ({ random, search, characters }) => {
  return (
    <div className={style.container}>
      <div className={style.randomAndSearch}>
        <Random random={random} card='left' />
        <Search search={search} card='left' />
      </div>
      <AllCharacters characters={characters} />
      <div className={style.randomAndSearch}>
        <Random random={random} card='right' characters={characters} />
        <Search search={search} card='right' />
      </div>
    </div>
  );
};

export default NavBar;
