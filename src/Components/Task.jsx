import React from 'react'
import './Task.css'

function Task(props) {
  return (
    <>
        <div className="task">
            <input className='checkbox' type='checkbox' />
            <p className='taskName'>{props.children}</p>
        </div>
    </>
  )
}

export default Task