import React from 'react';
import NavBar from './NavBar';
import Cards from './Cards';
import List from './List';

const Home = ({ characters }) => {
  console.log(characters);
  return (
    <div>
      <NavBar />
      <Cards characters={characters} />
      <List characters={characters} />
    </div>
  );
};

export default Home;
