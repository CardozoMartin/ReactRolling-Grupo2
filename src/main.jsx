import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// ----------------------------------------
// Ejercicio 1 - Trabajo práctico N° 2
// ----------------------------------------

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// ----------------------------------------
// Ejercicio 2 - Trabajo práctico N° 2
// ----------------------------------------

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App name="My friend" />
  </React.StrictMode>
);

// ----------------------------------------
// Ejercicio 3 - Trabajo práctico N° 2
// ----------------------------------------