import { useEffect, useState } from "react";

import { createRandomId } from "../../Utils";

// ---------------------------
// Ejercicio 5: Modifica el programa anterior para que las tareas se puedan almacenar en el localstorage.
// ---------------------------


const tasksLS = JSON.parse(localStorage.getItem('tasks')) || [];

const TodoListWithLS = () => {
    const [task, setTask] = useState(''); // task = tarea actual 
    const [tasks, setTasks] = useState(tasksLS); // tasks = lista de tareas
  
  
    const handleChangeTask = (e) => {
      setTask(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (task.trim() === '') return;
  
      const uppercaseTask = task.charAt(0).toUpperCase() + task.slice(1);
  
      const newTask = {
        id: createRandomId(),
        task: uppercaseTask,
      };
  
      setTasks([...tasks, newTask]);
      setTask('');
    };
  
    const handleDelete = (id) => {
      setTasks((state) => state.filter((task) => task.id !== id));
    };
    

    useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
    return (
      <section className="forthExercise text-light">
        <div className="divFifth">
        <h1 className="mb-4">⭐ ¡LISTADO DE TAREAS! ⭐</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="list-input" className="form-label">
          Ingresa tus tareas:
          </label>
          <input
            type="text"
            id="list-input"
            placeholder="Tarea..."
            className="mb-3 form-control"
            value={task}
            onChange={handleChangeTask}
          />
        </form>
        <hr />
        <ul className="todoListForth list-group">
          {tasks.length === 0 && <p className='text-center'>No existen tareas aún 💔</p>}
          {tasks.map((task) => (
            <li className="list-group-item d-flex align-items-center justify-content-between" key={task.id}> - {task.task}
            <button className="btn btn-warning rounded ms-3" onClick={() => handleDelete(task.id)}>x</button>
            </li>
          ))}
        </ul>
        </div>
      </section>
    );
  }
  
  export default TodoListWithLS;