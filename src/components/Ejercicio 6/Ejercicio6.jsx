import { useState } from "react";

// ---------------------------
// Ejercicio 6: Crear un proyecto de react que muestre un formulario con un input y un button que permite guardar un color en el localstorage.
// ---------------------------


const App6 = () => {
  const [color, setColor] = useState('');
  const [savedColors, setSavedColors] = useState(
    JSON.parse(localStorage.getItem('colors')) || []
  );

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSaveColor = () => {
    if (color.trim() === '') {
      alert('Ingrese un color válido.');
      return;
    }

    const updatedColors = [...savedColors, color];
    localStorage.setItem('colors', JSON.stringify(updatedColors));
    setSavedColors(updatedColors);
    setColor('');
  };

  return (
    <section className="sixthExercise container">
      <div className='sixthSection'>
      <h1>Administrar colores</h1>
        <input
          type="color"
          className='color-picker'
          value={color}
          onChange={handleColorChange}
        />
        <button className='btn btn-secondary' onClick={handleSaveColor}>Guardar</button>
        <h2 >Colores guardados:</h2>
        <ul>
          {savedColors.map((savedColor, index) => (
            <li key={index}>{savedColor}</li>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default App6;