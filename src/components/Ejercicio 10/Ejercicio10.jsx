import { useState } from "react";
import { useForm } from "react-hook-form";

// ---------------------------
// Ejercicio 10: Crear una aplicación web con react que contenga un formulario con los siguientes campos:
// ● nombre (en un campo de texto)
// ● descripción (en un textarea)
// ● género (en un select donde podemos seleccionar comedia, drama o infantil)
// Cuando presione enviar, guardar esta película en el localstorage y mostrar en una
// card.
// ---------------------------


const MovieForm = () => {
    const {registee, handleSubmit, formState: {errors}, reset } = useForm();
    const [movie, setMovie] = useState();

    const newMovie = (data) => {
    const newMovieData = {
        id: createRandomId(0,3000),
        movie: data,
    };
    setMovie([...movie, newMovieData]);
    //LS
    reset();
    }

    //delete

    //is valid el nombre

    //useEffect LS

    return (
        <>
        </>
    )
}
export default MovieForm;