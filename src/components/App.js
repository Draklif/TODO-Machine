import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCreateBtn } from './TodoCreateBtn';
import { TodoGithubBtn } from './TodoGithubBtn';
import { useLocalStorage } from '../hooks/useLocalStorage';

const ACTUAL_VERSION = 'TODOS_DRAKLIF_V1'
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'Hacer las tareas', completed: false },
// ]

function App() {
  const [todos, saveTodos] = useLocalStorage(ACTUAL_VERSION, [])
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos?.filter(todo => !!todo.completed).length
  const totalTodos = todos?.length
  const searchedTodos = todos?.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))

  const modifyTodo = (selectedTodoText, type = 'UPDATE') => {
    const updatedTodos = [...todos]
    const indexTodo = updatedTodos.findIndex(todo => todo.text === selectedTodoText)
    if (type === 'DELETE') {
      updatedTodos.splice(indexTodo, 1)
    } else {
      updatedTodos[indexTodo].completed = !updatedTodos[indexTodo].completed
    }
    saveTodos(updatedTodos)
  }

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos?.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onUpdate={() => modifyTodo(todo.text)}
            onDelete={() => modifyTodo(todo.text, 'DELETE')}
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
