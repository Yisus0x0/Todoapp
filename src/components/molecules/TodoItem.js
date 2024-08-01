import React from 'react';
import Checkbox from '../atoms/Checkbox';
import Button from '../atoms/Button';

const TodoItem = ({ todo, onToggle, onDelete }) => (
  <li>
    <div>
      <h3>
        <Checkbox checked={todo.completed} onChange={() => onToggle(todo.id)} />
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.title}
        </span>
      </h3>
      <p>{todo.description}</p>
    </div>
    <Button onClick={() => onDelete(todo.id)}>Eliminar</Button>
  </li>
);

export default TodoItem;