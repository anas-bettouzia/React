import { useState } from "react";

const TodoList = ({ initialTasks = [] }) => {
    const [tasks, setTasks] = useState(initialTasks);
    const [taskName, setTaskName] = useState("");
    const [priority, setPriority] = useState("Moyenne");
    const [search, setSearch] = useState("");
  
    const addTask = () => {
      if (taskName.trim() === "") return;
      setTasks([...tasks, { name: taskName, priority, completed: false }]);
      setTaskName("");
    };
  
    const toggleCompletion = (index) => {
      setTasks(tasks.map((task, i) => (i === index ? { ...task, completed: !task.completed } : task)));
    };
  
    const removeTask = (index) => {
      setTasks(tasks.filter((_, i) => i !== index));
    };
  
    const filteredTasks = tasks.filter((task) => task.name.toLowerCase().includes(search.toLowerCase()));
  
    return (
      <div>
        <h2>Todo List</h2>
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder="Nouvelle tâche" />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>Haute</option>
          <option>Moyenne</option>
          <option>Basse</option>
        </select>
        <button onClick={addTask}>Ajouter</button>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher une tâche" />
        <ul>
          {filteredTasks.map((task, index) => (
            <li key={index} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.name} ({task.priority})
              <button onClick={() => toggleCompletion(index)}>
                {task.completed ? "Annuler" : "Terminer"}
              </button>
              <button onClick={() => removeTask(index)}>Supprimer</button>
            </li>
          ))}
        </ul>
        <p>Total: {tasks.length}, Terminées: {tasks.filter(task => task.completed).length}</p>
      </div>
    );
  };

export default TodoList;