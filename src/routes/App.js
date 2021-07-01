import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ProtectedRoute from '../components/ProtectedRoute';

import NotFound from './../pages/NotFound'
import Index from './../pages/Index'
import Home from './../pages/Home'
import SignIn from './../pages/SignIn'
import SignUp from './../pages/SignUp'
import Layout from './../components/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Index}/>          
          <Route exact path="/sign-in" component={SignIn}/>
          <Route exact path="/sign-up" component={SignUp}/>

          <ProtectedRoute exact path="/home" component={Home}/>
          
          <Route path='*' component={NotFound}/>
        </Switch>      
      </Layout>
    </BrowserRouter>
  )
}
export default App;