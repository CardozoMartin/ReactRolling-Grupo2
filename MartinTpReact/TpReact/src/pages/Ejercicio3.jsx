import { useState } from "react";


export const Ejercicio3 = (props) => {
    const {mensaje: mail} = props;
    const [mensaje, setMensaje] = useState(mail)
  
    const cambiarMensaje = () => {
        setMensaje(mensaje + " ( from change state)");
      }
  
    return (
      <>
       <h2>Hello World{mensaje}</h2>
  
       <button className="btn btn-danger mb-5 mt-2" onClick={cambiarMensaje}>Haceme Click!</button>
      </>
    )
}
