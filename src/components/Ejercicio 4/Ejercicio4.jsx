import { useRef, useState } from "react";

import { generateRandomId } from "../../Utils";

// ---------------------------
// Ejercicio 4: Crear una aplicación web que muestre una lista de tareas, al ingresar una tarea en el input y presionar enter.
// ---------------------------


const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const taskRef = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
  const taskText = taskInput.value;
  const taskInput = taskRef.current;

    if (taskText) {
      setTasks((prevList) => [
        ...prevList,
        { id:generateRandomId(), text:taskText },
      ]);
      taskInput.value = "";
    }
  };


  return (
    <section className='forthExercise text-light'>
      <h1>Bienvenidx 😛</h1>
      <h2 className='mb-3'>Ingresa tus tareas</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
      <input
        type="text"
        placeholder="Tarea 1..."
        className='list-group-item d-flex align-items-center justify-content-between mt-3'
        ref={taskRef}
      />
      </fieldset>
      <button type='submit' className='btn btn-secondary mt-5'>Crear tarea</button>
      </form>
      <div className='text-light'>
      <ul className='list-group'>
        {tasks.map((item) => (
          <TodoList key={item.id} task={item} setTasks={setTasks} />
        ))}
      </ul>
      </div>
    </section>
  );
}

export default TodoList;