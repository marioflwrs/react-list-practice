import React from 'react'

const Task = ({text, task, tasks, setTasks}) => {

  //delete handler
  const deleteHandler = () => {
    console.log(task);
    setTasks(tasks.filter((el) => el.id !== task.id));

  }

  //edit handler
  const taskCompletedHandler = () => {
    setTasks(tasks.map((item) => {
      if (item.id === task.id) {
        return {
          ...item, completed: !item.completed
        }
      }
      return item;
    }))    
  }

  return (
    <div>
      <h4>{text}</h4>
      <button onClick={taskCompletedHandler}>done</button>
      <button onClick={deleteHandler}>delete</button>
    </div>
  )
}

export default Task