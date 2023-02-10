import React from 'react';
// Crear AllCharacters que es un botón que nos trae y muestra en el componente List el nombre de todos los personajes de nuestra API

const List = ({ characters }) => {
  return (
    <div>
      <ul>
        {characters &&
          characters.map(function (character) {
            return <li>{character.name}</li>;
          })}
        <li></li>
      </ul>
    </div>
  );
};

export default List;
