

import { useState } from "react"
import { ColorForms } from "../components/ejercicio6/ColorForms"
import ColorList from "../components/ejercicio6/ColorList"


const colorsLS = JSON.parse(localStorage.getItem("colors")) || []
export const Ejercicio6 = () => {
    const [colors, setColors] = useState(colorsLS)
   
  return (
    <section className="container my-4">
    <ColorForms setColors={setColors}></ColorForms>
    <ColorList colors={colors}></ColorList>
    </section>
  )
}
