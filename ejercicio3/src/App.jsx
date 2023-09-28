import { useState } from 'react'

import './App.css'

function App(props) {
  const {mensaje: Mensaje} = props;
  const [mensaje, setMensaje] = useState(Mensaje)

  const cambiarMensaje = ()=>{
    setMensaje((msj)=>{ return msj + "(from change state)"})
  }

  return (
    <>
     <h1>Hello World{mensaje}</h1>

     <button onClick={cambiarMensaje}>Haceme Click Perra!</button>
    </>
  )
}

export default App
