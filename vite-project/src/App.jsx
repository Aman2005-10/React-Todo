import React, { useState } from 'react';
import Header from './component/Header';
import ToDoList from './component/TodoList';
import './component/style.css'

function App() {

  
  const [todos, setTodos] = useState([]);

  // Function to add a new to-do
  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false, id: Date.now() }]);
  };

  // Function to toggle completion status
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Function to delete a to-do
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Function to edit a to-do item
  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div >
      <Header />
      <ToDoList 
        todos={todos} 
        addTodo={addTodo} 
        toggleComplete={toggleComplete} 
        deleteTodo={deleteTodo} 
        editTodo={editTodo} 
      />
    </div>
  );

};

export default App;
