import React from 'react';
import NavBar from './NavBar';
import Cards from './Cards';
import List from './List';

const Home = ({ characters }) => {
  return (
    <div>
      <NavBar />
      <Cards />
      <List characters={characters} />
    </div>
  );
};

export default Home;
