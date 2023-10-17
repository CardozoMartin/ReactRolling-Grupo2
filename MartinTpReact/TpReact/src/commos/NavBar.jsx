import { Link, NavLink } from "react-router-dom"
 import "../css/navbar.css"

 
 export const NavBar = () => {
   return (
    <nav className="navbar navbar-expand-lg bg-dark  ">
    <div className="container-fluid container">
      <Link className="navbar-brand text-white" to="/">Inicio</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon "></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className={({isActive})=>
              isActive ? "nav-link actived text-white" : "nav-link text-white"
            } aria-current="page" to="/ejercicio1">Ejercicio1</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive})=>
              isActive ? "nav-link actived text-white" : "nav-link text-white"
          } to="ejercicio2">Ejercicio2</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive})=>
              isActive ? "nav-link actived text-white" : "nav-link text-white"
            } to="ejercicio3">Ejercicio3</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive})=>
              isActive ? "nav-link actived text-white" : "nav-link text-white"
            } to="ejercicio4">Ejercicio4</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive})=>
              isActive ? "nav-link actived text-white" : "nav-link text-white"
            } to="ejercicio5">Ejercicio5</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive})=>
              isActive ? "nav-link actived text-white" : "nav-link text-white"
            } to="ejercicio6">Ejercicio6</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive})=>
              isActive ? "nav-link actived text-white" : "nav-link text-white"
            } to="ejercicio7">Ejercicio7</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive})=>
              isActive ? "nav-link actived text-white" : "nav-link text-white"
            } to="ejercicio8">Ejercicio8</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive})=>
              isActive ? "nav-link actived text-white" : "nav-link text-white"
            } to="ejercicio9">Ejercicio9</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive})=>
              isActive ? "nav-link actived text-white" : "nav-link text-white"
            } to="ejercicio10">Ejercicio10</NavLink>
          </li>
          
          
        </ul>
      </div>
    </div>
  </nav>
   )
 }
 