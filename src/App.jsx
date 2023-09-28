// import React from 'react';
import React, { Component } from 'react';
import './App.css'

// ----------------------------------------
// Ejercicio 1 - Trabajo práctico N° 2
// ----------------------------------------

function App(){
  return(
    <div>
      <h1>Hello world</h1>
    </div>
  );
}

export default App;

// ----------------------------------------
// Ejercicio 2 - Trabajo práctico N° 2
// ----------------------------------------

// function App(props){
//   return(
//     <div>
//       <h1>Hello {props.name}</h1>
//     </div>
//   );
// }

// export default App;

// ----------------------------------------
// Ejercicio 3 - Trabajo práctico N° 2
// ----------------------------------------

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       msj: '(from changed state)',
//     };
//   }

//   handleClick = () => {
//     this.setState({ msj: '(from changed state)!' });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Hello my friend {this.state.msj}</h1>
//         <button onClick={this.handleClick}>Click me</button>
//       </div>
//     );
//   }
// }

// export default App;