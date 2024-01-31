import React, { useState } from 'react';
import './Todo.css'

const Todo = () => {
  const [inputTask, setInputTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setInputTask(event.target.value);
  };

  const handleAddTask = () => {
    if (inputTask.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, { text: inputTask, completed: false }]);
      setInputTask('');
    }
  };

  const handleToggleComplete = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index].completed = !updatedTasks[index].completed;
      return updatedTasks;
    });
  };

  const handleDeleteTask = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.splice(index, 1);
      return updatedTasks;
    });
  };

  return (
    <div className="todo">
      <h1>Todo App</h1>
      <div>
        <input type="text" value={inputTask} onChange={handleInputChange} placeholder='Enter...'/>
        <button className='task_button' onClick={handleAddTask}>Add Task</button>
      </div>
      <ul className='task_list' >
        {tasks.map((task, index) => (
          <li key={index} className='task_item' >
            <span className='span_text' onClick={() => handleToggleComplete(index)}>
              {task.text}
            </span>
            <button className='ul_button' onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
