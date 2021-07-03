import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import {logoutAction} from '../redux/auth'

const NavInstructor = () => {

  const user = useSelector(store => store.auth.user)

  const dispatch = useDispatch()

  const logout = () => {    
    dispatch(logoutAction())
  }

  return (
    // todo: implement nav ant design
    <div className="navbar-instructor">
      <Link className="navbar-brand" to="/">Gymstructor</Link>
      {
        user ? (
          <button className="" onClick={logout}>Salir</button>
        ) : (
          <button className="" onClick={() => window.location.href = '/sign-in'}>Ingresar</button>
        )
      }      
    </div>

  )
}

export default NavInstructor;