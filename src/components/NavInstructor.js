import { Link } from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'

import {logoutAction} from '../redux/auth'

const NavInstructor = () => {

  const user = useSelector(store => store.auth.user)

  const dispatch = useDispatch()

  const logout = () => {    
    dispatch(logoutAction())
  }

  return (
    <Navbar bg="light" expand="lg">
      <Link className="navbar-brand" to="/">Gymstructor</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {
        user ? (
          <button className="nav-link" onClick={logout}>Salir</button>
        ) : (
          <button className="nav-link" onClick={() => window.location.href = '/sign-in'}>Ingresar</button>
        )
      }
    </Navbar>    
  )
}

export default NavInstructor;