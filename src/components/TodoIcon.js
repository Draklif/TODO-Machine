import '../styles/TodoIcon.css';
import React from 'react'
import { PiCheckFatFill as IconCheck } from 'react-icons/pi'
import { BiSolidTrash as IconDelete } from 'react-icons/bi'

const iconTypes = {
    "check": (completed) => <IconCheck className={completed ? 'Icon-check--active' : ''} />,
    "delete": () => <IconDelete />
}

function TodoIcon(props) {
  return (
    <span 
        className={`Icon Icon-${props.type}`}
        onClick={ props.onClick }
    >
        {iconTypes[props.type](props.completed)}
    </span>
  )
}

export { TodoIcon }