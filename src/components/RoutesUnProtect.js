import SignIn from '../pages/SignIn.js';
import SignUp from '../pages/SignUp.js';
import Index from '../pages/Index.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function Routes() {
  
  return (
    <Router>
      <Switch>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>

    </Router>
  );
}

export default Routes;
