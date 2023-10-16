import { useEffect, useState } from "react";

import ColorForm from "./ColorForm"
import ColorList from "./ColorList"

// ---------------------------
// Ejercicio 6: Crear un proyecto de react que muestre un formulario con un input y un button que permite guardar un color en el localstorage.
// ---------------------------

const colorsLS = JSON.parse(localStorage.getItem('colors')) || [];

const Ejercicio6 = () => {

  const [colors, setColors] = useState(colorsLS);

  useEffect(() => {
    localStorage.setItem('colors', JSON.stringify(colors));
  }, [colors]);

  return (
    <section className="container my-4">
    <ColorForm setColors={setColors} />
    <ColorList colors={colors} setColors={setColors} />
    </section>
    );
};

export default Ejercicio6;
