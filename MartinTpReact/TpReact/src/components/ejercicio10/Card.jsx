export const Card = (props) => {
  const { peliculas, setMovies } = props;

 /* const handleDelete = () => {
    setMovies((prevPelicula) =>
      prevPelicula.filter((prevPelicula) => prevPelicula.id !== peliculas.id)
    );
  };*/

  return (
    <article>
        <p> Titulo : {peliculas.title}</p>
        <p> Genero : {peliculas.genero}</p>
        <p>Descriptio : {peliculas.description}</p>

        <div>
        
        </div>
    </article>
  )
};
