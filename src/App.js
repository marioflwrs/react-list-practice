import './App.scss';
import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';



function App() {
  const [inputField, setInputField] = useState('');
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTasks, setFilteredTasks] = useState([]);


  useEffect(() => {
    getLocalTasks();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTasks();
  }, [tasks, status]);
  

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTasks(tasks.filter((task) => task.completed === true));
        break;
      case 'uncompleted':
        setFilteredTasks(tasks.filter((task) => task.completed === false));
        break;
      default:
        setFilteredTasks(tasks);
        break;
    }
  }

  //save to local storage
  const saveLocalTasks = () => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
      console.log(localStorage);
  }

  //get local tasks
  const getLocalTasks = () => {
    if(localStorage.getItem('tasks') === null) {
      localStorage.setItem('tasks', JSON.stringify([]))
    } else {
      let localTasks = localStorage.getItem('tasks', JSON.stringify(tasks));
      setTasks(JSON.parse(localTasks));
    }
  }
  

  return (
    <div className="App">
      <TaskForm 
      tasks={tasks} 
      setTasks={setTasks} 
      inputField={inputField} 
      setInputField={setInputField} 
      setStatus={setStatus}
      />

      <TaskList 
      tasks={tasks} 
      setTasks={setTasks}
      filteredTasks={filteredTasks}
      />

      <h1>{inputField}</h1>
    </div>
  );
}

export default App;
