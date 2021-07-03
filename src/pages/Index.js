import { useHistory } from 'react-router-dom';

const Index = () => {

  const history = useHistory();

  const routes = [
    { name: 'Iniciar sesión', path: 'sign-in', variant: 'primary'},
    { name: 'Registrarme', path: 'sign-up', variant: 'secondary'}
  ]

  const navigate = (path) => {
    history.push(path)
  }

  return (
    <div className="buttons-auth">
      {
        routes.map((route) => {          
          // TODO implement button ant design
          return <button onClick={() => navigate(route.path)}>{route.name}-{route.variant}</button>
        })        
      }
    </div>
  )
}

export default Index;