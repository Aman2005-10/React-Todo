import React, { useState } from 'react';
import './style.css'
const ToDoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={editText} 
            onChange={(e) => setEditText(e.target.value)} 
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span 
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </span>
          <button onClick={() => toggleComplete(todo.id)}>
            {todo.completed ? "Undo" : "Complete"}
          </button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </li>
  );
};

export default ToDoItem;
