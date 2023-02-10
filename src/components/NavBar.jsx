import React from 'react';
import Search from './Search';
import style from './NavBar.module.css';
import Random from './Random';
import AllCharacters from './AllCharacters';

const NavBar = () => {
  return (
    <div className={style.container}>
      <div className={style.randomAndSearch}>
        <Random />
        <Search />
      </div>
      <AllCharacters />
      <div className={style.randomAndSearch}>
        <Random />
        <Search />
      </div>
    </div>
  );
};

export default NavBar;
