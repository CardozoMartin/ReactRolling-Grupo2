
// ---------------------------
// Ejercicio 2: Modificar el componente anterior y enviar mediante props el valor “My friend”.
// ---------------------------

function App2(props){
  return(
    <div className="section-second">
      <h1>Hello {props.name}</h1>
    </div>
  );
}

export default App2;