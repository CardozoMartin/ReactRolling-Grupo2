import { useRef, useState } from "react";
import { List } from "./List";
import { generateRandomId } from "./Utils/Generardor";


function App() {
  const [list, setList] = useState([]);

  const tareaRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const tareaInput = tareaRef.current;
    const tareaText = tareaInput.value;

    if (tareaText) {
      setList((prevList) => [
        ...prevList,
        { id: generateRandomId(), text: tareaText },
      ]);
      tareaInput.value = "";
    }
  };

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
          <ul className="list-group ">
            {list.map((item) => (
              <List key={item.id} item={item} setList={setList} />
            ))}
          </ul>
          </div>
        </article>
      </section>
    </>
  );
}

export default App;
