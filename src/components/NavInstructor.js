import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const NavInstructor = () => {

  const history = useHistory()

  const logout = () => {
    localStorage.clear()
    history.push("/");
  }

  return (
    <Navbar bg="light" expand="lg">
      <Link className="navbar-brand" to="/">Gymstructor</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Nav className="mr-auto">
        <Link className="nav-link" to="/sign-in">Iniciar sesión</Link>
        <Link className="nav-link" to="/sign-up">Registrarme</Link>   
      </Nav>

      <button className="nav-link" onClick={logout}>Salir</button>
    </Navbar>    
  )
}

export default NavInstructor;