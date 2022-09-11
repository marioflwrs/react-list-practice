import React from 'react'

import Task from './Task'

function TaskList({tasks, setTasks, filteredTasks}) {
  // console.log(tasks);
  return (
    <div>
      {filteredTasks.map((task) => (
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