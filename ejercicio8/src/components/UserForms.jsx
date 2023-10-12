//import { useRef } from "react";

const UserForms = () => {
  document.title = "Formulario De Carga";

  //const nameInp = useRef();
  //const surNameInp = useRef();
  //const emailInp = useRef();
  //const dniInp = useRef();

  
  return (
    <section className="d-flex justify-content-center">
      <form className="">
        <h1 className="form-floating mb-3 text-white">Formulario de carga</h1>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
          />
          <label>Nombre</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
          />
          <label>Apellido</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
          />
          <label>Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
          />
          <label>DNI</label>
        </div>
        <button className="btn btn-danger">Enviar</button>
      </form>
    </section>
  );
};

export default UserForms;
