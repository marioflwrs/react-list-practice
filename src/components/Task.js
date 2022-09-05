import React from 'react'

function Task({text}) {

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
    </div>
  )
}

export default Task