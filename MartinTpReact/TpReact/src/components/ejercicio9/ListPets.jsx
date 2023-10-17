import React from "react";

const ListPets = (props) => {
    const { turnos } = props;

    return (
        <div>
            {turnos.map((turno, index) => (
                <div key={index}>
                    <p>Nombre: {turno.name}</p>
                    <p>Tipo: {turno.guy}</p>
                    <p>Edad: {turno.age}</p>
                    <p>Síntomas: {turno.symptoms}</p>
                </div>
            ))}
        </div>
    );
};

export default ListPets;