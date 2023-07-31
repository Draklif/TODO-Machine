import React from 'react';
import '../styles/TodoSearch.css';
import { TodoContext } from '../context/Context';

// Genera un mensaje aleatorio de placeholder
const random = ['Cortar cebolla', 'Tender la cama', 'Hacer tareas', 'Terminar un curso']

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext)

  return (
    <input
      placeholder={`${random[Math.floor(Math.random() * (random.length))]}...`}
      className="TodoSearch"
      value={searchValue}
      onChange={
        (event) => {
          setSearchValue(event.target.value)
        }
      }
    />
  );
}

export { TodoSearch };
