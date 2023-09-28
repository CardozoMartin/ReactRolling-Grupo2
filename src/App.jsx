import React from 'react';
import './App.css'

// ----------------------------------------
// Ejercicio 1 - Trabajo práctico N° 2
// ----------------------------------------

// function App() {
//   return (
//     <div>
//       <h1>Hello world</h1>
//     </div>
//   );
// }

// export default App;

// ----------------------------------------
// Ejercicio 2 - Trabajo práctico N° 2
// ----------------------------------------

function App(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  );
}

export default App;
