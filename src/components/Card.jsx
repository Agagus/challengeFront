import React from 'react';
import { useState } from 'react';
import style from './Card.module.css';
// El componente Card es un slide que muestra y oculta una card que contiene al menos 6 atributos del character, entre estos deben estar si o sí: image, name e id

const Card = ({ id, name, image, homeworld, species, height, total }) => {
  // const [currentCharacter, setCurrentCharacter] = useState(1);

  // const handleChangePrev = () => {};

  // const handleChangeNext = () => {
  //   setCurrentCharacter(currentCharacter + 1);
  // };

  return (
    // <>
    //   {id === currentCharacter && (
    <div className={style.container}>
      {/* {id === 1 ? (
            <button disabled>prev</button>
          ) : (
            <button onClick={handleChangePrev} disabled>
              prev
            </button>
          )} */}
      <img src={image} className={style.img} alt='character-img' />
      <div className={style.props}>
        <span>{name}</span>
        <span>{id}</span>
        <span>{homeworld}</span>
        <span>{species}</span>
        <span>{height}</span>
      </div>
      {/* {id === total ? (
            <button disabled>next</button>
          ) : (
            <button onClick={handleChangeNext}>next</button>
          )} */}
    </div>
  );
};

export default Card;
