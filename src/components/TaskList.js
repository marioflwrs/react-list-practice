import React from 'react'

import Task from './Task'

function TaskList({tasks, setTasks}) {
  // console.log(tasks);
  return (
    <div>
      {tasks.map((task) => (
        <Task 
          text={task.text} 
          key={task.id} 
          tasks={tasks}
          task={task}
          setTasks={setTasks}
          />
      ))}
    </div>
  )
}

export default TaskList