import { useRef } from 'react'
import { ValidateMovie } from '../../helpers/validators';
import { getRandomNumber } from '../../helpers/helper';

const FormMovies = (props) => {
  const { setPeliculas } = props;

  const titleRef = useRef();
  const descriptionRef = useRef();
  const generoRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const genero = generoRef.current.value;

    if (ValidateMovie(title, description, genero)) {
      alert("Datos ingresados correctamente");
      const guardarLS = JSON.parse(localStorage.getItem("peliculas")) || [];

      const nuevaPelicula = {
        id: getRandomNumber(0, 1000),
        title: title,
        description: description,
        genero: genero,
      };

      guardarLS.push(nuevaPelicula);
      localStorage.setItem("peliculas", JSON.stringify(guardarLS));
      setPeliculas(guardarLS);

      titleRef.current.value = "";
      descriptionRef.current.value = "";
      generoRef.current.value = "";
    } else {
      alert("Uno de los datos está incorrecto !!!");
    }
  
}

  return (
    <form onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="name-input" className='form-label'>Nombre</label>
                <input type="text" ref={titleRef} id="name-input" name='name' className="form-control"/>
            </fieldset>
            <fieldset>
                <label htmlFor="description-input" className='form-label'>Descripcion</label>
                <input type="text-area" ref={descriptionRef} id="description-input" name='description' className="form-control"/>
            </fieldset>
            <fieldset>
                <label htmlFor="genre-input" className='form-label'>Genero</label>
                <select ref={generoRef} id="genre-input" name='genre' className="form-control">
                <option value=''>Selecciona un genero</option>
                    <option value='comedy'>Accion</option>
                    <option value='drama'>Drama</option>
                    <option value='children'>Infantil</option>
                    <option value='children'>Terror</option>
                    <option value='children'>Ciencia Ficcion</option>
                    <option value='children'>Anime</option>

                </select>
            </fieldset>
            <button type="submit" className="mt-3 btn btn-danger">Agregar</button>
        </form>
  )
}

export default FormMovies