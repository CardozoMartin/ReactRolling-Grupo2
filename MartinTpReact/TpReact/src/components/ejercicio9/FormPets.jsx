import  { useRef } from "react";
import { ValidatePets } from "../../helpers/validators";

const FormPets = (props) => {
    const { setTurnos } = props;
    const namePets = useRef();
    const guyPets = useRef();
    const agePets = useRef();
    const symptomsPets = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = namePets.current.value;
        const guy = guyPets.current.value;
        const age = agePets.current.value;
        const symptoms = symptomsPets.current.value;

        if (ValidatePets(name, guy, age, symptoms)) {
            alert("Su consulta fue guardada con éxito");
            const newTurno = {
                name,
                guy,
                age,
                symptoms,
            };

            setTurnos((prevTurnos) => [...prevTurnos, newTurno]);

            namePets.current.value = "";
            guyPets.current.value = "";
            agePets.current.value = "";
            symptomsPets.current.value = "";
        } else {
            alert("Hubo un error en los campos. Verifique y vuelva a enviar");
        }
    };

    return (
        <section className="d-flex justify-content-center">
            <form onSubmit={handleSubmit}>
                <h2 className="form-floating mb-3 text-white">Clinic Pet`s</h2>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="name@example.com"
                        ref={namePets}
                    />
                    <label className="text-dark">Nombre</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="name@example.com"
                        ref={guyPets}
                    />
                    <label className="text-dark">Tipo</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="name@example.com"
                        ref={agePets}
                    />
                    <label className="text-dark">Edad</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="name@example.com"
                        ref={symptomsPets}
                    />
                    <label className="text-dark">Síntomas</label>
                </div>
                <button className="btn btn-danger">Enviar</button>
            </form>
        </section>
    );
}

export default FormPets;