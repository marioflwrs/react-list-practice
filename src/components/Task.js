import './task-style.scss';
import { FaTrash } from 'react-icons/fa';

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
    <div className='text-2xl font-light'>
      <h4 className={`${task.completed ? "taskCompleted" : ''}`}>{text}</h4>
      <button onClick={taskCompletedHandler}>completed</button>
      <button onClick={deleteHandler}><FaTrash/></button>
    </div>
  )
}

export default Task