import { React, useState } from 'react';
// import React, { Component } from 'react';

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

const NewMessage = () => {
  const [message, setMessage] = useState('Hello my friend');

  const handleClick = () => {
    setMessage(`${message} (from changed state)!`);
  };

  return (
    <div className='thirdExercise'>
      <h1 className='text-light'>{message}</h1>
      <button className='btn btn-secondary' onClick={handleClick}>Click me</button>
    </div>
  );
}

export default NewMessage;

// ---------------------------
// Ejercicio 4: Crear una aplicación web que muestre una lista de tareas, al ingresar una tarea en el input y presionar enter.
// ---------------------------


// ---------------------------
// Ejercicio 5: Modifica el programa anterior para que las tareas se puedan almacenar en el localstorage.
// ---------------------------


// ---------------------------
// Ejercicio 6: Crear un proyecto de react que muestre un formulario con un input y un button que permite guardar un color en el localstorage.
// ---------------------------


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
// fueron cargados, y mostrar un alert con el mensaje “datos enviados”, si los datos
// ---------------------------


// ---------------------------
// Ejercicio 9: Crear una aplicación web que permite cargar un formulario para registrar una cita en una veterinaria, todos los datos solicitados en el formulario deben ser obligatorios.
//La aplicación debe permitir borrar las citas y estas deben ser guardadas en el localstorage.
// ---------------------------