import SignIn from './../pages/SignIn.js';
import SignUp from './../pages/SignUp.js';
import Home from './../pages/Home.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Link className="navbar-brand" to="/">Gymstructor</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/sign-in">SignIn</Link>
            <Link className="nav-link" to="/sign-up">SignUp</Link>   
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </Router>
  );
}

export default Header;
