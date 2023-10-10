import { useRef, useState, useEffect } from "react"; // Importa useEffect desde React
import { generateRandomId } from "./Generardor";
import { List } from "./List";

export const Ejercicio5 = () => {
  const listLS = JSON.parse(localStorage.getItem("list")) || [];
  const [list, setList] = useState(listLS);

  const tareaRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const tareaInput = tareaRef.current;
    const tareaText = tareaInput.value;

    if (tareaText) { 
      const listNew = { id: generateRandomId(), text: tareaText }; 
      setList((items) => [...items, listNew]);

      tareaRef.current.value = "";
    }
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <section className="d-flex justify-content-center">
        <article className="text-center">
          <h1 className="text-white">Bienvenido</h1>
          <h3 className="text-white">Ingrese su lista</h3>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <input
                type="text"
                placeholder="Agregue su tarea"
                id="listInput"
                className="form-control w-100 text-center mb-3"
                ref={tareaRef}
              />
            </fieldset>
            <button type="submit" className="btn btn-success">
              Agregar
            </button>
          </form>
          <div className="container pt-5">
            <ul className="list-group">
              {list.map((item) => (
                <List key={item.id} item={item} setList={setList} />
              ))}
            </ul>
          </div>
        </article>
      </section>
    </>
  );
};
