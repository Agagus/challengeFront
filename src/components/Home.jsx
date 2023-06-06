import React, { useState } from 'react';
import NavBar from './NavBar';
import Cards from './Cards';
import style from './Home.module.css'
// import List from './List';

const Home = ({ characters }) => {
  console.log(characters);
  const [cards, setCards] = useState({
    // cardLeft: {},
    // cardRight: {},
  });

  const search = (input, card) => {
    console.log(input, 'NAME');
    const character = characters.find((character) =>
      character.name.toLowerCase().includes(input.toLowerCase())
    );
    console.log(character, 'CHARACTER');
    card === 'left'
      ? setCards({ ...cards, cardLeft: character })
      : setCards({ ...cards, cardRight: character });
  };

  const random = (card) => {
    let index = Math.round(Math.random() * (characters.length - 1 - 0) + 0);
    console.log(index, card);
    card === 'left'
      ? setCards({ ...cards, cardLeft: characters[index] })
      : setCards({ ...cards, cardRight: characters[index] });
    console.log(cards);
  };

  return (
    <div className={style.home}>
      <NavBar search={search} random={random} characters={characters} />
      {/* <Cards characters={characters} /> */}
      <Cards cards={cards} characters={characters} />
      {/* <Cards cards={cards.cardRight} characters={characters} /> */}
      {/* <List characters={characters} /> */}
    </div>
  );
};

export default Home;
