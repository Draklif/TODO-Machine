import React from 'react'
import { TodoIcon } from './TodoIcon'

function CompleteIcon({ completed, onUpdate }) {
  return (
    <TodoIcon
      type='check'
      completed={ completed }
      onClick={ onUpdate }
    />
  )
}

export { CompleteIcon };