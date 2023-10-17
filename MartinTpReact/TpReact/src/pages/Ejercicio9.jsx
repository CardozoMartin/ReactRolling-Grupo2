import { useEffect, useState } from "react";
import FormPets from "../components/ejercicio9/FormPets";
import ListPets from "../components/ejercicio9/ListPets";

const clinicPetsLS = JSON.parse(localStorage.getItem('turnos')) || [];
export const Ejercicio9 = () => {
    const [turnos, setTurnos] = useState(clinicPetsLS);

    useEffect(() => {
        localStorage.setItem('turnos', JSON.stringify(turnos));
    }, [turnos]);

    return (
        <section>
            <FormPets setTurnos={setTurnos}></FormPets>
            <ListPets turnos={turnos} setTurnos={setTurnos}></ListPets>
        </section>
    );
}