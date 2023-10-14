
// ---------------------------
// Ejercicio 5: Modifica el programa anterior para que las tareas se puedan almacenar en el localstorage.
// ---------------------------

// Cargar las tareas desde el LS
export const loadTasksFromLocalStorage = () => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      return JSON.parse(storedTasks);
    }
    return [];
  };
  
  // Guardar las tareas en el LS
  export const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  