import './App.scss';
import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';



function App() {
  const [inputField, setInputField] = useState('');
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState('all');

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
      />

      <h1>{inputField}</h1>
    </div>
  );
}

export default App;
