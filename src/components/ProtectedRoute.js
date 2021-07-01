import { Redirect, Route } from "react-router-dom";
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ component: Component }) => {
  const user = useSelector(store => store.auth.user)

  let component = <Redirect to="/sign-in" />

  if (user) {
    component = Component
  }

  return (
    <Route>
      {component}
    </Route>
  )
}

export default ProtectedRoute;