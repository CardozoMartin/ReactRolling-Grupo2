import { useState } from "react";

import { createRandomId } from "../../Utils";

// ---------------------------
// Ejercicio 4: Crear una aplicación web que muestre una lista de tareas, al ingresar una tarea en el input y presionar enter.
// ---------------------------

const TodoList = () => {
  const [task, setTask] = useState(''); // task = tarea actual 
  const [tasks, setTasks] = useState([]); // tasks = lista de tareas


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

  return (
    <section className="forthExercise text-light">
      <div className="divForth">
      <h1>Bienvenidx 😛💜</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="list-input" className="form-label">
        Ingresa tus tareas
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
            <button className="btn btn-secondary rounded ms-3" onClick={() => handleDelete(task.id)}>x</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TodoList;
