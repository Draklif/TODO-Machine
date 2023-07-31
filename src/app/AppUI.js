import React from 'react'
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoCreateBtn } from '../components/TodoCreateBtn';
import { TodoGithubBtn } from '../components/TodoGithubBtn';

function AppUI({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  modifyTodo
}) {
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {loading && <p style={{color: 'white', textAlign: 'center'}}>Estamos cargando...</p>}
        {error && <p style={{color: 'white', textAlign: 'center'}}>¡Ocurrió un error!</p>}
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
  )
}

export { AppUI }