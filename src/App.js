import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import axios from 'axios';

function App() {
  //creo el state characters para guardar alli mi data
  const [characters, setCharacters] = useState([]);

  //mediante la siguiente funcion hago la peticion a la API, y guardo la data en el state.
  const getAllChar = async () => {
    const response = await axios.get(
      'https://akabab.github.io/starwars-api/api/all.json'
    );
    setCharacters(response.data);
    console.log(characters);
  };

  useEffect(() => {
    getAllChar();
  }, []);

  return (
    <div className='App'>
      <Home characters={characters} />
    </div>
  );
}

export default App;
