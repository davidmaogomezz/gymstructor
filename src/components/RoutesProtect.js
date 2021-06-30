import NavInstructor from './NavInstructor.js';
import Home from '../pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function Routes() {
  return (
    <Router>      
      <NavInstructor/>
      <Switch>
        <Route path="home">
          <Home />
        </Route>
      </Switch>

    </Router>
  );
}

export default Routes;
