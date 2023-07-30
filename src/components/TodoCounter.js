import '../styles/TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <>
      <p className='TodoCounterTitle'>To-Do Machine</p>
      <h2 className="TodoCounter">
        Has completado <span>{completed}</span> de <span>{total}</span> TODOs
      </h2>
    </>
  );
}

export { TodoCounter };
