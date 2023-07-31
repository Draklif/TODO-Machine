import React from 'react';
import '../styles/TodoCounter.css';
import { TodoContext } from '../context/Context';

function TodoCounter() {
  const { completedTodos: completed, totalTodos: total } = React.useContext(TodoContext)
  
  return (
    <>
      <p className='TodoCounterTitle'>To-Do Machine</p>
      
      <h2 className="TodoCounter">
        {total === completed && total !== 0 && (<>Has completado <span>todos</span> tus TODOs</>)}
        {total === 0 && (<>Puedes agregar un <span>nuevo</span> TODO pulsando el botón</>)}
        {total > completed && total !== 0 && (<>Has completado <span>{completed}</span> de <span>{total}</span> TODOs</>)}
      </h2>
    </>
  );
}

export { TodoCounter };
