import AdminView from "./AdminView";

// ---------------------------
// Ejercicio 14: Crea una aplicación web, que permita mostrar un blog de recetas de cocina en una
// página, desde otra pagina debo poder agregar, modificar o quitar las recetas y
// estas deben estar almacenadas en el localstorage o json-server.
// ---------------------------

const HomeView = () => {
  return (
    <section className="text-light text-center">
    <h1>HomeView</h1>
    <AdminView />
    </section>
  )
}
export default HomeView;