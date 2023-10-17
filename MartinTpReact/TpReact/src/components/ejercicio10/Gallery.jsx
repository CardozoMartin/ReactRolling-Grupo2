import { Card } from "./Card";


const Gallery = (props) => {
  const { peliculas, setPeliculas } = props;

  return (
    <section className="row mt-3 w-100">
      {peliculas.map((movie) => (
        <Card key={movie.id} peliculas={movie} setPeliculas={setPeliculas} />
      ))}
    </section>
  );

}

export default Gallery