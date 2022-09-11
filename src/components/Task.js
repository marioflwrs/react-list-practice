import './task-style.scss';

const Task = ({text, task, tasks, setTasks, status, setStatus}) => {

  //delete handler
  const deleteHandler = () => {
    console.log(task);
    setTasks(tasks.filter((item) => item.id !== task.id));

  }

  //task completed handler
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
      <h4 className={`${task.completed ? "taskCompleted" : ''}`}>{text}</h4>
      <button onClick={taskCompletedHandler}>done</button>
      <button onClick={deleteHandler}>delete</button>
    </div>
  )
}

export default Task