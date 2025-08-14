import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import type { Task } from './types/TaskType';



function App() {
  const [task, setTask] = useState<Task[]>([
    { id:1, title: 'Learn React', completed: false },
    { id:2, title: 'Build a project', completed: true },
    { id:3, title: 'Get a job!', completed: false }

  ]);
  
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');

  const addTask = (e: React.FormEvent) => {
    e.preventDefault(); //prevent page reload

    if(newTaskTitle.trim() === '') return;

    const newTask: Task = {
      id: Date.now(),
      title: newTaskTitle.trim(),
      completed: false,
    }

    setTask([...task, newTask]);
    setNewTaskTitle('');
  };

  const toggleTask = (id: number) => {
    const updated = task.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTask(updated);
  };

  const deleteTask = (id: number) => {
    const updated = task.filter(t => t.id !== id);
    setTask(updated);
  };


  return (
    <div className="App">
      <h1>Task Tracker</h1>
      
      {/* Add Task Form */}
      <form onSubmit={addTask}>
        <input
          type='text'
          placeholder='New task...'
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>


      {/* Task List */}
      <TaskList
        tasks={task}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />

    </div>   
  );
}

export default App;
