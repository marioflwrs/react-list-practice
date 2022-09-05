import React from 'react'

function TaskForm({ inputField, setInputField, tasks, setTasks }) {
  //input task handler
  const inputTaskHandler = (e) => {
    setInputField(e.target.value);
  }

  const submitTaskHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, {text: inputField, completed: false, id: Math.random() * 1000}]);
    setInputField('');
  }
  
  return ( 
    <form onSubmit={submitTaskHandler}>
      <input value={inputField} type="text" onChange={inputTaskHandler} />
      <button onClick={submitTaskHandler}>submit</button>
    </form>
  )
}

export default TaskForm