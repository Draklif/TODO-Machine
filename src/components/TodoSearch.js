import '../styles/TodoSearch.css';

// Genera un mensaje aleatorio de placeholder
const random = ['Cortar cebolla', 'Tender la cama', 'Hacer tareas', 'Terminar un curso']

function TodoSearch() {
  return (
    <input
      placeholder={`${random[Math.floor(Math.random() * (random.length))]}...`}
      className="TodoSearch"
    />
  );
}

export { TodoSearch };
