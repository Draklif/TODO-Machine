import React from 'react'
import '../styles/HandlerLoading.css';

function HandlerLoading() {
  return (
    <div className='LoadingTodo-container'>
        <span className='LoadingTodo-completeIcon'></span>
        <p></p>
        <span className='LoadingTodo-deleteIcon'></span>
    </div>
  )
}

export { HandlerLoading }