import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.length < 5) return setError('Title must be at least 5 characters long.');
    if (description.length < 10) return setError('Description must be at least 10 characters.');
    if (new Date(dueDate) <= new Date()) return setError('Due date must be in the future.');

    const newTask = {
      id: Date.now(),
      title,
      description,
      dueDate,
      priority,
      completed: false,
    };

    addTask(newTask);
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('Medium');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Task</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} /><br />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} /><br />
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} /><br />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select><br />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
