import '../styles/TodoCounter.css';

function TodoCounter({ total, completed }) {
  if (total === completed && total !== 0) {
    return (
      <>
        <p className='TodoCounterTitle'>To-Do Machine</p>
        
        <h2 className="TodoCounter">
          Has completado <span>todos</span> tus TODOs
        </h2>
      </>
    );
  } else if (total === 0) {
    return (
      <>
        <p className='TodoCounterTitle'>To-Do Machine</p>
        
        <h2 className="TodoCounter">
          Puedes agregar un <span>nuevo</span> TODO pulsando el botón
        </h2>
      </>
    );
  } else {
    return (
      <>
        <p className='TodoCounterTitle'>To-Do Machine</p>
        
        <h2 className="TodoCounter">
          Has completado <span>{completed}</span> de <span>{total}</span> TODOs
        </h2>
      </>
    );
  }
}

export { TodoCounter };
