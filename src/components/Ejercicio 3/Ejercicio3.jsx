import { useState } from "react";

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