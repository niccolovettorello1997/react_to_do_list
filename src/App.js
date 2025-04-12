import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]); // Array of tasks
  const [newTask, setNewTask] = useState(''); // New task
  const [numberOfTasks, setNumberOfTasks] = useState(0); // Current number of tasks

  useEffect(() => {
    console.log(numberOfTasks);
  }, [numberOfTasks]);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks); // Add task to list, the old list is not modified, INSTEAD A NEW ONE IS CREATED
      setNewTask(''); // Reset new incoming task
      setNumberOfTasks(updatedTasks.length); // Increment total number of tasks
    }
  };

  const handleDeleteTask = (task) => {
    const updatedTasks = tasks.filter(t => t !== task);
    setTasks(updatedTasks); // Removes task from the list, essentially  copying the whole list, minus that specific task
    setNumberOfTasks(updatedTasks.length); // Update number of tasks
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)} // e.target.value = new input value, entered by user
        placeholder="Add new task"
      />
      <button onClick={handleAddTask}>Add</button> {/* Execute handleAddTask when button is pressed */}

      <ul>
        {tasks.map((task, index) => ( // Display task list as unordered list
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(task)}>Delete</button> {/* Delete task when button is pressed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
