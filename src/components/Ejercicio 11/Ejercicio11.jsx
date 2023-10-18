
import { useQuery } from '@tanstack/react-query';

import { createRandomId } from '../../Utils';

// ---------------------------
// Ejercicio 11: Crear una aplicación web con react, que consuma la API provista por
// https://newsapi.org/ o https://newsdata.io/docs
// ---------------------------

const TQueryFetch = () => {
  // const { data, isLoading, isError } = useQuery(['todos'], getTodos);

  // const addTodo = useMutation(postTodo);

  // const handleClick = () => {
  //   addTodo.mutate({
  //     id: createRandomId(0, 5000),
  //     userId: createRandomId(0, 5000),
  //     title: 'Holaaa',
  //     completed: false,
  //   });
  // };

  // if (isError) {
  //   toast.error('Ocurrió un error');
  // }

  // if (addTodo.isError) {
  //   toast.error('Ocurrió un error al agregar la tarea');
  // }

  return (
    <>
    <h1 className='text-light text-center bg-secondary p-4'>Noticias</h1>
    <hr />
    <section className='container bg-secondary p-5 section-news'>
      <article>
    <label htmlFor="exampleDataList" className="form-label ">Search:</label>
    <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
    </article>
    </section>


      {/* <button onClick={handleClick} className='btn btn-primary my-5'>
        Agregar nueva tarea
      </button>
      {addTodo.isLoading && <h1>Agregando nueva tarea...</h1>}
      {isLoading && <h1>Cargando tareas...</h1>}
      {data?.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))} */}
    </>
  );
};
export default TQueryFetch;