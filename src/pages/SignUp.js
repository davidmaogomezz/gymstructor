import React, { useState } from 'react'
import {auth} from "../db/auth";
import AlertInstructor from '../components/AlertInstructor'
import { Link } from "react-router-dom";

const SignUp = () => {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[message, setMessage] = useState('')
  const[variant, setVariant] = useState('')

  const signIn = (e) => {
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email, password).then(response => {
      const user = response.user
      localStorage.setItem('user', JSON.stringify(user))
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
      <h4 className="mt-2">Registrarme</h4>
      <AlertInstructor message={message} variant={variant} reset={resetMessage}/>
      <form className="form-group form-sign-up" onSubmit={signIn}>
        <input onChange={(e) => setEmail(e.target.value)} className="mt-4 form-control" placeholder="Introduce el email" type="text" />
        <input onChange={(e) => setPassword(e.target.value)} className="mt-4 form-control" placeholder="Introduce el password" type="password" />
        <div className="options-auth">
          <button className="mt-4 btn btn-primary">Registrarme</button>
          <Link to="/sign-in">Iniciar sesión</Link>
        </div>        
      </form>
    </div>
  )  
}

export default SignUp;
