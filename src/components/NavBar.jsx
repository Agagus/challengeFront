import React from 'react';
import Search from './Search';
import style from './NavBar.module.css';
import Random from './Random';

const NavBar = () => {
  return (
    <div className={style.container}>
      <div className={style.randomAndSearch}>
        <Random />
        <Search />
      </div>
      <button>All Characters</button>
      <div className={style.randomAndSearch}>
        <Random />
        <Search />
      </div>
    </div>
  );
};

export default NavBar;
