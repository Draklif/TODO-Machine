import '../styles/TodoCreateBtn.css';

function TodoCreateBtn({ setOpenModal }) {
  return (
    <button className="TodoCreateBtn" 
    onClick={
      () => {
        setOpenModal(state => !state)
      }
    }
    >+</button>
  );
}

export { TodoCreateBtn };
