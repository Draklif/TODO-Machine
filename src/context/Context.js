import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const ACTUAL_VERSION = 'TODOS_DRAKLIF_V1'
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'Hacer las tareas', completed: false },
// ]

const TodoContext = React.createContext()

function TodoProvider({ children }) {
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
        <TodoContext.Provider value = {{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            modifyTodo
        }}>
            { children }
        </TodoContext.Provider>
    )
}


<TodoContext.Consumer></TodoContext.Consumer>

export { TodoContext, TodoProvider }