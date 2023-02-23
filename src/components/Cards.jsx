// import React, { useEffect, useState } from 'react';
import { useState } from 'react';
import Card from './Card';
import style from './Cards.module.css';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';

const Cards = ({ characters, cards }) => {
  const total = characters.length + 1; //88

  const [currentCharacter, setCurrentCharacter] = useState(1);
  const [currentCharacterBis, setCurrentCharacterBis] = useState(88);

  const handleChangePrev = () => {
    setCurrentCharacter(currentCharacter - 1);
  };

  const handleChangeNext = () => {
    currentCharacter === 16
      ? setCurrentCharacter(currentCharacter + 2)
      : setCurrentCharacter(currentCharacter + 1);
  };

  const handleChangePrevBis = () => {
    setCurrentCharacterBis(currentCharacterBis - 1);
  };

  const handleChangeNextBis = () => {
    currentCharacterBis === 16
      ? setCurrentCharacterBis(currentCharacterBis + 2)
      : setCurrentCharacterBis(currentCharacterBis + 1);
  };

  return (
    <div className={style.card}>
      {cards.cardLeft ? (
        // <div className={style.container}>
        <Card
          id={cards.cardLeft.id}
          name={cards.cardLeft.name}
          image={cards.cardLeft.image}
          homeworld={cards.cardLeft.homeworld}
          species={cards.cardLeft.species}
          height={cards.cardLeft.height}
          // total={total}
        />
      ) : (
        // </div>
        characters &&
        characters.map(function (character) {
          if (character.id === currentCharacter)
            return (
              <div className={style.container}>
                {character.id === 1 ? (
                  <button className={style.btn} disabled>
                    <AiOutlineLeft />
                  </button>
                ) : (
                  <button className={style.btn} onClick={handleChangePrev}>
                    <AiOutlineLeft />
                  </button>
                )}
                <Card
                  id={character.id}
                  name={character.name}
                  image={character.image}
                  homeworld={character.homeworld}
                  species={character.species}
                  height={character.height}
                  total={total}
                />
                {character.id === total ? (
                  <button className={style.btn} disabled>
                    <AiOutlineRight />
                  </button>
                ) : (
                  <button className={style.btn} onClick={handleChangeNext}>
                    <AiOutlineRight />
                  </button>
                )}
              </div>
            );
        })
      )}
      ;
      {cards.cardRight ? (
        <Card
          id={cards.cardRight.id}
          name={cards.cardRight.name}
          image={cards.cardRight.image}
          homeworld={cards.cardRight.homeworld}
          species={cards.cardRight.species}
          height={cards.cardRight.height}
          // total={total}
        />
      ) : (
        characters &&
        characters.reverse().map(function (character) {
          if (character.id === currentCharacterBis)
            return (
              <div className={style.container}>
                {character.id === 1 ? (
                  <button className={style.btn} disabled>
                    <AiOutlineLeft />
                  </button>
                ) : (
                  <button className={style.btn} onClick={handleChangePrevBis}>
                    <AiOutlineLeft />
                  </button>
                )}
                <Card
                  id={character.id}
                  name={character.name}
                  image={character.image}
                  homeworld={character.homeworld}
                  species={character.species}
                  height={character.height}
                  total={total}
                />
                {character.id === total ? (
                  <button className={style.btn} disabled>
                    <AiOutlineRight />
                  </button>
                ) : (
                  <button className={style.btn} onClick={handleChangeNextBis}>
                    <AiOutlineRight />
                  </button>
                )}
              </div>
            );
        })
      )}
    </div>
  );
};

export default Cards;
