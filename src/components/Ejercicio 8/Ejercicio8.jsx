import { useRef } from "react";

// ---------------------------
// Ejercicio 8: Crear una aplicación web con react que tenga los siguientes componentes:
// 1. Título “Formulario” con un color de background diferente al color del body.
// 2. Formulario, con los campos de Nombre, Apellido, DNI, email y botón que me
// permita enviar el formulario.
// Una vez presionado el botón de enviar se debe verificar que todos los campos
// fueron cargados, y mostrar un alert con el mensaje “datos enviados”.
// ---------------------------


const FormExsEight = () => {

    const nameRef = useRef();
    const lastNameRef = useRef();
    const dniRef = useRef();
    const emailRef = useRef();

    const isValidData = (name, lastName, dni, email) => {
        if (name.trim().length < 4) {
        return false;
      }

        if (lastName.trim().length < 4) {
        return false;
      }
    
        if (isNaN(Number(dni))) {
        return false;
      }
    
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(email)) {
        return false;
      }
      return true;

      };
    
    
    const handleSubmit = (e) => {
      e.preventDefault();
    
      const name = nameRef.current.value;
      const lastName = lastNameRef.current.value;
      const dni = dniRef.current.value;
      const email = emailRef.current.value;
    
      if (isValidData(name, lastName, dni, email)) {
        alert('Los datos se han enviado correctamente.');
      } else {
        alert('Por favor, complete todos los datos necesarios.');
      }
      };

  return (
  <section className="container text-light eighthSection">
    <form className='formEighth' onSubmit={handleSubmit}>
        <h1 className='mb-4'>Formulario 👻</h1>
        <fieldset>
            <label htmlFor="name-input" className='form-label'>Nombre:</label>
            <input type="text" ref={nameRef} id="name-input" name="name" className="form-control" />
            </fieldset>
            <fieldset className="mt-4">
                <label htmlFor="surname-input" className='form-label'>Apellido:</label>
                <input type="text" ref={lastNameRef} id="surname-input" name="lastName" className="form-control" />
                </fieldset>
            <fieldset className="mt-4">
                <label htmlFor="dni-input" className='form-label'>Número de documento:</label>
                <input type="number" ref={dniRef} id="dni-input" name="dni" className="form-control" />
                </fieldset>
                <fieldset className="mt-4">
                    <label htmlFor="email-input" className='form-label'>E-mail:</label>
                    <input type="email" ref={emailRef} id="email-input" name="email" className="form-control" />
                    </fieldset>
                    <button type="submit" className="btn btn-warning fw-bold text-secondary-emphasis mt-4 btnData">Enviar datos</button>
                    </form>
                    </section>
                    )
                };

export default FormExsEight;