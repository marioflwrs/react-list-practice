import React from 'react'

import Task from './Task'

function TaskList({tasks, setTasks}) {
  console.log(tasks);
  return (
    <div>
      {tasks.map((task) => (
        <Task text={task.text} key={task.id} />
      ))}
    </div>
  )
}

export default TaskList