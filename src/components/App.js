import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCreateBtn } from './TodoCreateBtn';
import { TodoGithubBtn } from './TodoGithubBtn';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length
  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))

  const updateTodo = (selectedTodoText) => {
    const updatedTodos = [...todos]
    const indexTodo = updatedTodos.findIndex(todo => todo.text === selectedTodoText)
    updatedTodos[indexTodo].completed = !updatedTodos[indexTodo].completed
    setTodos(updatedTodos)
  }
  const deleteTodo = (selectedTodoText) => {
    const updatedTodos = [...todos]
    const indexTodo = updatedTodos.findIndex(todo => todo.text === selectedTodoText)
    updatedTodos.splice(indexTodo, 1)
    setTodos(updatedTodos)
  }

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onUpdate={() => updateTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <p style={{color: '#ffddff', textAlign: 'center'}}>Made with ❤ by Jose M. Rentería</p>
      
      <TodoCreateBtn />
      <TodoGithubBtn />
    </>
  );
}

export default App;
