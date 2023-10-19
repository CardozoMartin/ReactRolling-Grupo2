import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary fixed-top">
    <div className="container">
      <Link className="navbar-brand" to='/error'>Rolling Studio</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Rolling Code Studio presents</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <NavLink className={({isActive}) =>
          isActive ? 'nav-link actived fw-bold' : 'nav-link'
          } to='/1'>Home</NavLink>
          </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle fw-bold" to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Exercises
              </a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to='/2'>Exercise 2</NavLink></li>
                <li><NavLink className="dropdown-item" to='/3'>Exercise 3</NavLink></li>
                <li><NavLink className="dropdown-item" to='/4'>Exercise 4</NavLink></li>
                <li><NavLink className="dropdown-item" to='/5'>Exercise 5</NavLink></li>
                <li><NavLink className="dropdown-item" to='/6'>Exercise 6</NavLink></li>
                <li><NavLink className="dropdown-item" to='/7'>Exercise 7</NavLink></li>
                <li><NavLink className="dropdown-item" to='/8'>Exercise 8</NavLink></li>
                <li><NavLink className="dropdown-item" to='/9'>Exercise 9</NavLink></li>
                <li><NavLink className="dropdown-item" to='/10'>Exercise 10</NavLink></li>
                <li><NavLink className="dropdown-item" to='/11'>Exercise 11</NavLink></li>
                <li><NavLink className="dropdown-item" to='/12'>Exercise 12</NavLink></li>
                <li><NavLink className="dropdown-item" to='/13'>Exercise 13</NavLink></li>
                <li><NavLink className="dropdown-item" to='/14'>Exercise 14</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  )
}
export default Navbar;