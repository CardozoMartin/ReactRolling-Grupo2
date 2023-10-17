import { useRef } from "react";
import { validateCampos } from "../../helpers/validators";


export const UserForms = () => {
    const nameRef = useRef()
    const lastNameRef = useRef()
    const emailRef = useRef()
    const dniRef = useRef()

   

    const handleSubmit =  (e)=>{
        e.preventDefault();

        const name = nameRef.current.value;
        const lastName = lastNameRef.current.value;
        const email = emailRef.current.value;
        const dni = dniRef.current.value;

        if(validateCampos(name, lastName, email, dni)){
            alert("Los Datos fueron enviados correctamente");
        }  else{
            alert("por favorm complete los datos corretamente")
        }
        
    }

  return (
    <section className="d-flex justify-content-center">
      <form onSubmit={handleSubmit}>
        <h2 className="form-floating mb-3 text-white">Formulario de carga</h2>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="name@example.com"
            ref={nameRef}
          />
          <label className="text-dark">Nombre</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="name@example.com"
            ref={lastNameRef}
          />
          <label className="text-dark">Apellido</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
            ref={emailRef}
          />
          <label className="text-dark">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="name@example.com"
            ref={dniRef}
          />
          <label className="text-dark">DNI</label>
        </div>
        <button className="btn btn-danger">Enviar</button>
      </form>
    </section>
  );
  
}
