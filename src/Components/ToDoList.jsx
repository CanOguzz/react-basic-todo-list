import React, { useState, useEffect } from "react";
import "./ToDoList.css";
const ToDoList = () => {
  const [tasks, setTasks] = useState(["Eat", "Sleep", "Code"]);
 
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState("");
  const [updatedTaskName, setUpdatedTaskName] = useState("");

  const updateTaskFnc = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTaskName;
    setTasks(updatedTasks);
    setEditingTask(null);
    setUpdatedTaskName("");
  };
  const handleSubmit = (e) => {
    setUpdatedTaskName(e.target.value);
  };
  //function for text box input
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const moveTaskUp = (index) => {
    if (index === 0) {
      return;
    } else {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index - 1];
      updatedTasks[index - 1] = temp;
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index === tasks.length - 1) {
      return;
    } else {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index + 1];
      updatedTasks[index + 1] = temp;
      setTasks(updatedTasks);
    }
  };

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
            {editingTask === index ? (
              <input type="text" value={updatedTaskName} onChange={handleSubmit} />
            ) : (
              <span className="text">{task}</span>
            )}
            <button className="delete-button" onClick={() => deleteTask(index)}>
              DELETE
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              ☝
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              👇
            </button>
            <button
              className="move-button"
              onClick={() => {
                setEditingTask(index);
                if (editingTask === index) {
                  updateTaskFnc(index);
                } else {
                }
              }}
            >
              {editingTask === index ? "SUBMIT" : "EDIT"}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
