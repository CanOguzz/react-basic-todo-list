import React, { useState, useEffect } from "react";
import "./ToDoList.css";
const ToDoList = () => {
  const [tasks, setTasks] = useState(["Eat", "Sleep", "Code"]);
  const [task, setTask] = useState("");
  const [newTask, setNewTask] = useState("");

  //function for text box input
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {

    if(newTask.trim() !== ""){
      setTasks(t => [...t, newTask])
    setNewTask("");
    }
    
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !==index))
  };

  const moveTaskUp = (index) => {};

  const moveTaskDown = (index) => {};

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        ></input>
        <button className="add-button" onClick={addTask}>
          ADD
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              DELETE
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              ☝
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
