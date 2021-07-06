import { Link } from "react-router-dom";
import { Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction } from '../redux/auth'

const NavInstructor = () => {

  const user = useSelector(store => store.auth.user)

  const links = [
    { id: '1', name: 'Gymstructor', link: '/' },
    { id: '2', name: 'Contacto', link: '/contact' }
  ]

  const dispatch = useDispatch()

  const logout = () => {
    dispatch(logoutAction())
  }

  const itemsLeft = () => {
    let items = []
    links.forEach((link) => {
      const item = <Menu.Item key={link.id}>
        <Link to={link.link}>{link.name}</Link>
      </Menu.Item>
      items.push(item)
    })
    return items
  }

  const itemsRigth = () => {
    let item = <Menu.Item key='key-button-auth' style={rightStyle}>
      <Link to='/sign-in'>Ingresar</Link>
    </Menu.Item>
    if (user) {
      return <Menu.Item key='key-button-auth' style={rightStyle}>
        <Link to='/sign-in' onClick={logout}>Salir</Link>
      </Menu.Item>
    }
    return item
  }

  // TODO extract style functions to styles css

  const centerStyle = {
    position: 'relative',
    display: 'flex'
  };

  const rightStyle = { position: 'absolute', top: 0, right: 0 };

  // End TODO

  return (
    <Menu style={centerStyle} mode="horizontal">
      {itemsLeft()}
      {itemsRigth()}
    </Menu>
  )
}

export default NavInstructor;