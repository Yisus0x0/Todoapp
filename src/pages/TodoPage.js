// src/pages/TodoPage.js
import React, { useState } from 'react';
import TodoForm from '../components/organisms/TodoForm';
import TodoList from '../components/organisms/TodoList';
import FilterBar from '../components/organisms/FilterBar';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (newTodo) => {
    setTodos([...todos, { ...newTodo, id: Date.now(), completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  return (
    <div className="TodoPage">
      <h1>To-Do List</h1>
      <TodoForm onSubmit={addTodo} />
      <FilterBar setFilter={setFilter} />
      <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
};

export default TodoPage;