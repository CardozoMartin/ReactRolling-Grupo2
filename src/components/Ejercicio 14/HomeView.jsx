import { useSession } from "../../stores/useSession";

import AdminView from "./AdminView";

import './Ejercicio14.css'

// ---------------------------
// Ejercicio 14: Crea una aplicación web, que permita mostrar un blog de recetas de cocina en una
// página, desde otra pagina debo poder agregar, modificar o quitar las recetas y
// estas deben estar almacenadas en el localstorage o json-server.
// ---------------------------

const HomeView = () => {
  const {user} = useSession();
  console.log(user)



  return (
    <section className="text-light text-center section-home container">
    <h5>HomeView</h5>
    {/* <AdminView /> */}
    </section>
  )
}
export default HomeView;