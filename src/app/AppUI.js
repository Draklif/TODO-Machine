import React from 'react'
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoCreateBtn } from '../components/TodoCreateBtn';
import { TodoGithubBtn } from '../components/TodoGithubBtn';
import { HandlerError } from '../components/HandlerError';
import { HandlerLoading } from '../components/HandlerLoading';
import { TodoContext } from '../context/Context';

function AppUI() {
  const { loading, error, searchedTodos, modifyTodo } = React.useContext(TodoContext)

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <>
          <HandlerLoading />
          <HandlerLoading />
          <HandlerLoading />
        </> }
        {error && <HandlerError /> }
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