import React from 'react';
import style from './List.module.css';
// Crear AllCharacters que es un botón que nos trae y muestra en el componente List el nombre de todos los personajes de nuestra API

const List = ({ characters }) => {
  return (
    <div className={style.container}>
      {characters &&
        characters.map(function (character) {
          return <li className={style.name}>{character.name}</li>;
        })}
    </div>
  );
};

export default List;
