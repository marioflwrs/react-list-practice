import './task-form.scss';

function TaskForm({ inputField, setInputField, tasks, setTasks, setStatus }) {
  //input task handler
  const inputTaskHandler = (e) => {
    setInputField(e.target.value);
  }

  const submitTaskHandler = (e) => {    
    e.preventDefault();

    //save task to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(localStorage.getItem('tasks'));
    setTasks([...tasks, {text: inputField, completed: false, id: Math.random() * 1000}]);
    setInputField('');
  }

  const statusHandler = (e) => {
    setStatus(e.target.value);
    console.log(statusHandler);
  }
  
  return ( 
    <form onSubmit={submitTaskHandler}>
      <input value={inputField} type="text" onChange={inputTaskHandler} />
      <button onClick={submitTaskHandler}>submit</button>
      <div className="filter-container">
        <select onChange={statusHandler}>
          <option value="all">all</option>
          <option value="completed">completed</option>
          <option value="uncompleted">uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default TaskForm