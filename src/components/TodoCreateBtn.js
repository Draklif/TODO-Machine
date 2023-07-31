import '../styles/TodoCreateBtn.css';

function TodoCreateBtn() {
  return (
    <button className="TodoCreateBtn" 
    onClick={
      (event) => {
        console.log(event.target)
      }
    }
    >+</button>
  );
}

export { TodoCreateBtn };
