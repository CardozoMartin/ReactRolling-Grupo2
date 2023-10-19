import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import { createRandomId } from "../../Utils";

// ---------------------------
// Ejercicio 10: Crear una aplicación web con react que contenga un formulario con los siguientes campos:
// ● nombre (en un campo de texto)
// ● descripción (en un textarea)
// ● género (en un select donde podemos seleccionar comedia, drama o infantil)
// Cuando presione enviar, guardar esta película en el localstorage y mostrar en una
// card.
// ---------------------------


const MovieForm = () => {
    const {register, handleSubmit, formState: {errors}, reset } = useForm();
    const [movie, setMovie] = useState([]);
    // const [formMD, setFormMD] = useState({});

    const newMovie = (data) => {
    const newMovieData = {
        id: createRandomId(0,3000),
        movie: data,
    };
    setMovie([...movie, newMovieData]);
    localStorage.setItem('movies', JSON.stringify([...movie, newMovieData]));
    reset();
    };

    const deleteMovie = (id) => {
        const updatedMovies = movie.filter((apt)=> apt.id !== id);
        setMovie(updatedMovies);
        localStorage.setItem('movies', JSON.stringify(updatedMovies));
    };

    const isValidName = (value) => {
        const words = value.split(' ');
      
        if (words.some((word) => word.trim() === '')) {
          return 'Please avoid meaningless spaces in the title.';
        }
        return true;
      };

    useEffect(() => {
        const dataFromLS = JSON.parse(localStorage.getItem('movies')) || [];
        setMovie(dataFromLS);
      }, []);

    return (
        <>
        <form className='tenth-form container card' onSubmit={handleSubmit(newMovie)}>
        <div className='card-header fw-bold text-center'>🎥🎞 ROLLING CINEMA 🎬📽</div>
          <p className='text-center mt-2'>Fill out the form to create a movie</p>
            <fieldset className='px-3'>
              <label htmlFor='name-input' className='form-label'>
                Title:
              </label>
              <input
                type='text'
                id='name-input'
                className={`form-control ${errors.name ? 'is-invalid': ''}`}
                {...register('name', {
                  required: 'This field is required.',
                  minLength: {
                    value: 2,
                    message: 'This field has a minimum of 2 characters.',
                  },
                  maxLength: {
                    value: 50,
                    message: 'This field has a maximum of 50 characters.',
                  },
                  validate: isValidName,
                })}
                required
              />
              <p className='text-danger'>{errors.name?.message}</p>
            </fieldset>
            <fieldset className='px-3'>
              <label htmlFor='genre-input' className='form-label'>Genre:</label>
              <select className={`form-select ${errors.genre ? 'is-invalid': ''}`} 
              id='genre-input'
              {...register('genre',{
                  required: 'This field is required.',
              })}>
              <option value=''>Choose an option</option>
              <option value='Comedy'>Comedy</option>
              <option value='Drama'>Drama</option>
              <option value='Animated'>Animated</option>
              </select>
              <p className='text-danger'>{errors.genre?.message}</p>
            </fieldset>
            <fieldset className='px-3'>
              <label htmlFor='cover-input' className='form-label'>
                Cover:
              </label>
              <input
                type='url'
                id='cover-input'
                className={`form-control ${errors.cover ? 'is-invalid': ''}`}
                {...register('cover', {
                  required: 'Image link is required.',
                  pattern: {
                      value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                      message: 'Please enter a valid link.',
                  },
                  minLength: {
                  value: 10,
                  message: 'This field has a minimum of 10 characters.',
              },
              maxLength: {
              value: 300,
              message: 'This field has a maximum of 300 characters.',
              },
          })}
          required/>
          <p className='text-danger'>{errors.cover?.message}</p>
          </fieldset>
            <fieldset className='mt-2 px-3'>
              <label htmlFor='description-input' className='form-label'>Description:
              </label>
              <textarea id='description-input' className={`form-control ${errors.description ? 'is-invalid': ''}`} 
              {...register('description', {
                required: 'The description is required.',
                minLength: {
                  value: 3,
                  message: 'This field has a minimum of 3 characters.',
                },
                maxLength: {
                  value: 350,
                  message: 'This field has a maximum of 350 characters.',
                },
              })}
              required/>
              <p className='text-danger'>{errors.description?.message}</p>
            </fieldset>
            <div className='text-end px-3'>
              <button type='submit' className='mt-3 mb-3 btn-load'>Load</button></div>
        </form>
        <hr />
        <section className="container w-50 mb-5">
        <article className="row">
          {movie.length === 0 && <p className='text-center card p-3'>There are no movies uploaded yet.</p>}
          {movie.map((movie) => (
            <div className="col-6" key={movie.id}>
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title text-center mb-3">Movie 📽</h5>
                  <hr />
                  <p className="card-text ps-3">
                    <div className="text-center">
                    <img
                    src={movie.movie.cover}
                    alt={movie.movie.name}
                    className="movie-cover"/>
                    </div>
                    <br />
                    <div className="fw-bold">
                    - Title: {movie.movie.name}</div>
                    - Genre: {movie.movie.genre}
                    <br />
                    - Description: {movie.movie.description}
                  </p>
                  <div className='text-end'>
                  <button type="button" className="btn-delete-tenth" onClick={() => deleteMovie(movie.id)}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </article>
      </section>
    </>
    );
};
export default MovieForm;