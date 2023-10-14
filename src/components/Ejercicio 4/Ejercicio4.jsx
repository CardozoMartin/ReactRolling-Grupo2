import { useState } from "react";

// ---------------------------
// Ejercicio 4: Crear una aplicación web que muestre una lista de tareas, al ingresar una tarea en el input y presionar enter.
// ---------------------------

function TodoList() {
  const [task, setTask] = useState(''); // task = tarea actual 
  const [tasks, setTasks] = useState([]); // tasks = lista de tareas

  const handleChangeTask = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;

    const uppercaseTask = task.charAt(0).toUpperCase() + task.slice(1);

    setTasks([...tasks, uppercaseTask]);
    setTask('');
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
          placeholder="Tarea 1..."
          className="mb-3 form-control"
          value={task}
          onChange={handleChangeTask}
        />
      </form>
      <hr />
      <ul className="todoListForth">
        {tasks.map((task, index) => (
          <li key={index}> - {task}</li>
        ))}
      </ul>
      </div>
    </section>
  );
}

export default TodoList;
