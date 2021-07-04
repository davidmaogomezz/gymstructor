import { Button, Space } from 'antd';
import { useHistory } from 'react-router-dom';

const Index = () => {

  const history = useHistory();

  const routes = [
    { id: 1, name: 'Iniciar sesión', path: 'sign-in', variant: 'primary'},
    { id: 2, name: 'Registrarme', path: 'sign-up', variant: 'secondary'}
  ]

  const navigate = (path) => {
    history.push(path)
  }

  const renderButtons = () => (
    routes.map((route) => {          
      return <Button key={route.id} type={route.variant} onClick={() => navigate(route.path)}>{route.name}</Button>                  
    })       
  )

  return (
    <div className="buttons-auth">
      <Space size="small" direction="vertical">
        {renderButtons()}
      </Space>
    </div>
  )
}

export default Index;