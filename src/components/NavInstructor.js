import { Link } from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux'

import {logoutAction} from '../redux/auth'

const NavInstructor = () => {

  const history = useHistory()
  const dispatch = useDispatch()

  const logout = () => {    
    dispatch(logoutAction())
    history.push("/");
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