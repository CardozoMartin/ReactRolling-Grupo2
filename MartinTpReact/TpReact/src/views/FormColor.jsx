import { useEffect } from "react"
import { Ejercicio6 } from "../pages/Ejercicio6"


const FormColor = () => {
  useEffect(()=>{
    document.title = "Ejercicio 6"
},[])
  return (
    <Ejercicio6></Ejercicio6>
  )
}

export default FormColor