import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { AppUI } from './AppUI';

const ACTUAL_VERSION = 'TODOS_DRAKLIF_V1'
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'Hacer las tareas', completed: false },
// ]

function App() {
  const { 
    item: todos, 
    saveItem: saveTodos,
    loading,
    error 
  } = useLocalStorage(ACTUAL_VERSION, [])
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
    <AppUI 
      loading = { loading }
      error = { error }
      completedTodos={ completedTodos }
      totalTodos={ totalTodos }
      searchValue={ searchValue }
      setSearchValue={ setSearchValue }
      searchedTodos={ searchedTodos }
      modifyTodo={ modifyTodo }
    />
  )
}

export default App;
