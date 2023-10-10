// import { React, useState, useRef } from 'react';
// import React, { Component } from 'react';
import React, { useRef } from 'react';

// import { generateRandomId } from './utils.jsx';

import './App.css'

// Trabajo práctico N° 2
// ---------------------------
// Ejercicio 1: Crear una aplicación web con un componente que muestre en pantalla el mensaje "Hello World".
// ---------------------------

// function App(){
//   return(
//     <div>
//       <h1>Hello world</h1>
//     </div>
//   );
// }

// export default App;

// ---------------------------
// Ejercicio 2: Modificar el componente anterior y enviar mediante props el valor “My friend”.
// ---------------------------

// function App(props){
//   return(
//     <div>
//       <h1>Hello {props.name}</h1>
//     </div>
//   );
// }

// export default App;

// ---------------------------
// Ejercicio 3: Modificar el programa anterior agregando al componente un state con la clave msj: “(from changed state)”, además agregar un botón al presionar este botón (onClick)
// ---------------------------

// const NewMessage = () => {
//   const [message, setMessage] = useState('Hello my friend');

//   const handleClick = () => {
//     setMessage(`${message} (from changed state)!`);
//   };

//   return (
//     <div className='thirdExercise'>
//       <h1 className='text-light'>{message}</h1>
//       <button className='btn btn-secondary' onClick={handleClick}>Click me</button>
//     </div>
//   );
// }

// export default NewMessage;

// ---------------------------
// Ejercicio 4: Crear una aplicación web que muestre una lista de tareas, al ingresar una tarea en el input y presionar enter.
// ---------------------------


// const TodoList = () => {
//   const [tasks, setTasks] = useState([]);

//   const taskRef = useRef();
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//   const taskText = taskInput.value;
//   const taskInput = taskRef.current;

//     if (taskText) {
//       setTasks((prevList) => [
//         ...prevList,
//         { id:generateRandomId(), text:taskText },
//       ]);
//       taskInput.value = "";
//     }
//   };


//   return (
//     <section className='forthExercise text-light'>
//       <h1>Bienvenidx 😛</h1>
//       <h2 className='mb-3'>Ingresa tus tareas</h2>
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//       <input
//         type="text"
//         placeholder="Tarea 1..."
//         className='list-group-item d-flex align-items-center justify-content-between mt-3'
//         ref={taskRef}
//       />
//       </fieldset>
//       <button type='submit' className='btn btn-secondary mt-5'>Crear tarea</button>
//       </form>
//       <div className='text-light'>
//       <ul className='list-group'>
//         {tasks.map((item) => (
//           <TodoList key={item.id} task={item} setTasks={setTasks} />
//         ))}
//       </ul>
//       </div>
//     </section>
//   );
// }

// export default TodoList;


// ---------------------------
// Ejercicio 5: Modifica el programa anterior para que las tareas se puedan almacenar en el localstorage.
// ---------------------------


// ---------------------------
// Ejercicio 6: Crear un proyecto de react que muestre un formulario con un input y un button que permite guardar un color en el localstorage.
// ---------------------------

// const App = () => {
//   const [color, setColor] = useState('');
//   const [savedColors, setSavedColors] = useState(
//     JSON.parse(localStorage.getItem('colors')) || []
//   );

//   const handleColorChange = (e) => {
//     setColor(e.target.value);
//   };

//   const handleSaveColor = () => {
//     if (color.trim() === '') {
//       alert('Ingrese un color válido.');
//       return;
//     }

//     const updatedColors = [...savedColors, color];
//     localStorage.setItem('colors', JSON.stringify(updatedColors));
//     setSavedColors(updatedColors);
//     setColor('');
//   };

//   return (
//     <section className="sixthExercise container">
//       <div className='sixthSection'>
//       <h1>Administrar colores</h1>
//         <input
//           type="color"
//           className='color-picker'
//           value={color}
//           onChange={handleColorChange}
//         />
//         <button className='btn btn-secondary' onClick={handleSaveColor}>Guardar</button>
//         <h2 >Colores guardados:</h2>
//         <ul>
//           {savedColors.map((savedColor, index) => (
//             <li key={index}>{savedColor}</li>
//             ))}
//         </ul>
//       </div>
//     </section>
//   );
// }

// export default App;

// ---------------------------
// Ejercicio 7: Crear una aplicación web que permite reutilizar componentes siguiendo la estructura de la siguiente imagen, pueden incorporar bootstrap u hojas de estilo propias.
// Tendremos un EmpleadoAvatar (recuadro rojo), un EmpleadoRow (recuadro verde) y por último un EmpleadoList (recuadro azul).
// ---------------------------


// ---------------------------
// Ejercicio 8: Crear una aplicación web con react que tenga los siguientes componentes:
// 1. Título “Formulario” con un color de background diferente al color del body.
// 2. Formulario, con los campos de Nombre, Apellido, DNI, email y botón que me
// permita enviar el formulario.
// Una vez presionado el botón de enviar se debe verificar que todos los campos
// fueron cargados, y mostrar un alert con el mensaje “datos enviados”.
// ---------------------------


const FormExsEight = () => {

    const nameRef = useRef();
    const lastNameRef = useRef();
    const dniRef = useRef();
    const emailRef = useRef();

    const isValidData = (name, lastName, dni, email) => {
        if (name.trim().length < 4) {
        return false;
      }

        if (lastName.trim().length < 4) {
        return false;
      }
    
        if (isNaN(Number(dni))) {
        return false;
      }
    
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(email)) {
        return false;
      }
      return true;

      };
    
    
    const handleSubmit = (e) => {
      e.preventDefault();
    
      const name = nameRef.current.value;
      const lastName = lastNameRef.current.value;
      const dni = dniRef.current.value;
      const email = emailRef.current.value;
    
      if (isValidData(name, lastName, dni, email)) {
        alert('Los datos se han enviado correctamente.');
      } else {
        alert('Por favor, complete todos los datos necesarios.');
      }
      };

  return (
    <section className="container text-light eighthSection">
        <form className='formEighth' onSubmit={handleSubmit}>
          <h1 className='mb-4'>Formulario 👻</h1>
            <fieldset>
                <label htmlFor="name-input" className='form-label'>Nombre:</label>
                <input type="text" ref={nameRef} id="name-input" name="name" className="form-control" />
            </fieldset>
            <fieldset className="mt-4">
                <label htmlFor="surname-input" className='form-label'>Apellido:</label>
                <input type="text" ref={lastNameRef} id="surname-input" name="lastName" className="form-control" />
            </fieldset>
            <fieldset className="mt-4">
                <label htmlFor="dni-input" className='form-label'>Número de documento:</label>
                <input type="number" ref={dniRef} id="dni-input" name="dni" className="form-control" />
            </fieldset>
            <fieldset className="mt-4">
                <label htmlFor="email-input" className='form-label'>E-mail:</label>
                <input type="email" ref={emailRef} id="email-input" name="email" className="form-control" />
            </fieldset>
            <button type="submit" className="btn btn-warning fw-bold text-secondary-emphasis mt-4 btnData">Enviar datos</button>
        </form>
    </section>
  )
}

export default FormExsEight;


// ---------------------------
// Ejercicio 9: Crear una aplicación web que permite cargar un formulario para registrar una cita en una veterinaria, todos los datos solicitados en el formulario deben ser obligatorios.
//La aplicación debe permitir borrar las citas y estas deben ser guardadas en el localstorage.
// ---------------------------