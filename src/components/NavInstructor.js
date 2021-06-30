import { Link } from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import {useDispatch} from 'react-redux'

import {logoutAction} from '../redux/auth'

const NavInstructor = () => {

  const dispatch = useDispatch()

  const logout = () => {    
    dispatch(logoutAction())
  }

  return (
    <Navbar bg="light" expand="lg">
      <Link className="navbar-brand" to="/">Gymstructor</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <button className="nav-link" onClick={logout}>Salir</button>
    </Navbar>    
  )
}

export default NavInstructor;