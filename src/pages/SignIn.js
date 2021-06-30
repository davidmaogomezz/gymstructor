import React, { useState } from 'react'
import {auth} from "../db/auth";
import AlertInstructor from './AlertInstructor'
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const SignIn = () => {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[message, setMessage] = useState('')
  const[variant, setVariant] = useState('')

  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault()    
    auth.signInWithEmailAndPassword(email, password).then(response => {
      const user = response.user
      localStorage.setItem('user', JSON.stringify(user))
      history.push('/home')
    }).catch(err => {
      setMessage(err.message)
      setVariant('danger')
    })    
  }

  const resetMessage = () => {
    setMessage('')
    setVariant('')
  }

  return (
    <div className="form-auth sign-up">
      <h4 className="mt-2">Iniciar sesión</h4>
      <AlertInstructor message={message} variant={variant} reset={resetMessage}/>
      <form className="form-group form-sign-up" onSubmit={signIn}>
        <input onChange={(e) => setEmail(e.target.value)} className="mt-4 form-control" placeholder="Introduce el email" type="text" />
        <input onChange={(e) => setPassword(e.target.value)} className="mt-4 form-control" placeholder="Introduce el password" type="password" />
        <div className="options-auth">
          <button className="mt-4 btn btn-primary">Iniciar sesión</button>
          <Link to="/sign-up">Registrarme</Link>
        </div>
      </form>
    </div>
  )  
}

export default SignIn;
