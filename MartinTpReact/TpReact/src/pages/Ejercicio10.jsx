import { useEffect, useState } from "react";
import FormMovies from "../components/ejercicio10/FormMovies";
import Gallery from "../components/ejercicio10/Gallery";

const Ejercicio10 = () => {
  const peliculasLS = JSON.parse(localStorage.getItem("peliculas")) || [];
  const [peliculas, setPeliculas] = useState(peliculasLS);

  useEffect(() => {
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }, [peliculas]);

  return (
    <div className="Container mb-5">
      <h2>Complete el formulario</h2>
      <FormMovies setPeliculas={setPeliculas} />
      <Gallery peliculas={peliculas} setPeliculas={setPeliculas} />
    </div>
  );
};

export default Ejercicio10;
