import React from 'react';
import style from './Card.module.css';
// El componente Card es un slide que muestra y oculta una card que contiene al menos 6 atributos del character, entre estos deben estar si o sí: image, name e id

const Card = () => {
  return (
    <div className={style.container}>
      Image
      <div className={style.props}>
        <span>Name</span>
        <span>id</span>
        <span>homeworld</span>
        <span>species</span>
        <span>heigth</span>
      </div>
    </div>
  );
};

export default Card;
