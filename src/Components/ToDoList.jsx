

import React, { useState, useEffect} from 'react'

const ToDoList = () => {

    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const [newTask, setNewTask] = useState('');

    //function for text box input
    const handleInputChange = (e) => {
        setTask(e.target.value);
    }

    const addTask = () => {

    }

    const deleteTask = (index) => {

    }

    const moveTaskUp = (index) => {

    }

    const moveTaskDown = (index) => {

    }

  return (
    <div className='to-do-list'>
        <h1>To-Do-List</h1>
        <div>
            <input type='text' placeholder='Enter a task...' value={newTask} onChange={handleInputChange}></input>
        </div>

    </div>
  )
}

export default ToDoList