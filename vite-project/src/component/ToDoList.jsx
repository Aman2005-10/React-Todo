import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import './style.css';

const ToDoList = ({ todos, addTodo, toggleComplete, deleteTodo, editTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div className="boxes">
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        placeholder="Add a new to-do" 
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <ToDoItem 
            key={todo.id} 
            todo={todo} 
            toggleComplete={toggleComplete} 
            deleteTodo={deleteTodo} 
            editTodo={editTodo} 
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
