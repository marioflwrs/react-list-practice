import './App.scss';
import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';



function App() {
  const [inputField, setInputField] = useState('');
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <TaskForm tasks={tasks} setTasks={setTasks} inputField={inputField} setInputField={setInputField} />
      <TaskList tasks={tasks} setInputField={setInputField} />

      <h1>{inputField}</h1>
    </div>
  );
}

export default App;
