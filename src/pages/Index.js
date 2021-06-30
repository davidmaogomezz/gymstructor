import { Button } from 'react-bootstrap';
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
          return <Button key={route.path} onClick={() => navigate(route.path)} variant={route.variant} size="lg" block>
                  {route.name}
                </Button>
        })        
      }
    </div>
  )
}

export default Index;