import React from 'react'
import { TodoContext } from '../context/Context'
import '../styles/TodoForm.css'

function TodoForm() {
  const { modifyTodo, setOpenModal } = React.useContext(TodoContext)

  const [newTodoValue, setNewTodoValue] = React.useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    modifyTodo(newTodoValue, 'ADD')
    setOpenModal(false)
  }

  const onCancel = () => {
    setOpenModal(false)
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  return (
    <form className='TodoForm-container' onSubmit={onSubmit}>
        <label>¡Escribe tu nuevo TODO!</label>
        <textarea 
          placeholder='Añadir un nuevo TODO...'
          value={newTodoValue}
          onChange={onChange}
          required 
        />
        <div className='TodoForm-buttonContainer'>
            <button
              type='button'
              className='TodoForm-button TodoForm-button--cancel'
              onClick={onCancel}
            >Cancelar</button>
            <button
              type='submit'
              className='TodoForm-button TodoForm-button--add'
            >Agregar</button>
        </div>
    </form>
  )
}

export { TodoForm }