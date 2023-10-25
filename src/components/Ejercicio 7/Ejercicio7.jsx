import EmployeeCard from "./Card";

// ---------------------------
// Ejercicio 7: Crear una aplicación web que permite reutilizar componentes siguiendo la estructura de la siguiente imagen, pueden incorporar bootstrap u hojas de estilo propias.
// Tendremos un EmpleadoAvatar (recuadro rojo), un EmpleadoRow (recuadro verde) y por último un EmpleadoList (recuadro azul).
// ---------------------------


let employees = [
  {
    id: 1,
    fullName: 'Bianca Deblinger',
    title: 'CEO',
    department: 'Engineering',
    photo: 'empleado01.png',
  },
  {
    id: 2,
    fullName: 'Martín Cardozo',
    title: 'Frontend Dev',
    department: 'Marketing',
    photo: 'empleado02.png',
  },
  {
    id: 3,
    fullName: 'Gabriel Azubel',
    title: 'CFO',
    department: 'Business',
    photo: 'empleado03.png',
  },
  {
    id: 4,
    fullName: 'Ezequiel Amin',
    title: 'Art director',
    department: 'Business',
    photo: 'empleado04.png',
  },
  {
    id: 5,
    fullName: 'Belén Segovia',
    title: 'CTO',
    department: 'Marketing',
    photo: 'empleado05.png',
  },
  {
    id: 6,
    fullName: 'Mauricio Zurita',
    title: 'CMO',
    department: 'Engineering',
    photo: 'empleado06.png',
  },
  {
    id: 7,
    fullName: 'Mariana Juarez',
    title: 'Digital Strategist',
    department: 'Marketing',
    photo: 'empleado07.png',
  },
  {
    id: 8,
    fullName: 'Ivan Zanel',
    title: 'Backend Dev',
    department: 'Engineering',
    photo: 'empleado08.png',
  },
  {
    id: 9,
    fullName: 'Enzo Iñigo',
    title: 'Backend Dev',
    department: 'Engineering',
    photo: 'empleado09.png',
  },
  {
    id: 10,
    fullName: 'Mauricio Gunsett',
    title: 'Frontend Dev',
    department: 'Engineering',
    photo: 'empleado10.png',
  },
];
  
  const App7 = () => {
    return (
    <section className="container">
    <ul className='list-group mt-5 mb-5'>{employees.map((employee) => (
    <EmployeeCard key={employee.id} employee={employee} />
    ))}</ul>
    </section>
    );
  };

  export default App7;