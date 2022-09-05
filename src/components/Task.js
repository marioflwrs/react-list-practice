import React from 'react'

function Task({text, tasks, setTasks}) {

  //events
  const deleteHandler = () => {
    console.log('delete');
  }

  //edit handler
  const editHandler = () => {
    console.log('edit');
  }

  return (
    <div>
      <h4>{text}</h4>
      <button onClick={editHandler}>edit</button>
      <button onClick={deleteHandler}>delete</button>
    </div>
  )
}

export default Task