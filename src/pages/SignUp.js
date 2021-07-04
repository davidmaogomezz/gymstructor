import React, { useState } from 'react'
import { Space } from 'antd'
import {useDispatch, useSelector} from 'react-redux'

import {signUpAction} from '../redux/auth'
import {messageAction} from '../redux/auth'
import {typeAction} from '../redux/auth'

import AlertInstructor from '../components/AlertInstructor'
import { Link } from "react-router-dom";

const SignUp = () => {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const dispatch = useDispatch()
  const message = useSelector(store => store.auth.message)
  const type = useSelector(store => store.auth.type)

  const signIn = (e) => {
    e.preventDefault()    
    dispatch(signUpAction(email, password))
  }

  const resetMessage = () => {
    dispatch(messageAction(''))
    dispatch(typeAction(''))
  }

  return (
    <div className="form-auth sign-up">
      <h4 className="mt-2">Registrarme</h4>
      <Space direction="vertical">
        <AlertInstructor message={message} type={type} reset={resetMessage}/>
        <form className="form-group form-sign-up" onSubmit={signIn}>
          <input onChange={(e) => setEmail(e.target.value)} className="mt-4 form-control" placeholder="Introduce el email" type="text" />
          <input onChange={(e) => setPassword(e.target.value)} className="mt-4 form-control" placeholder="Introduce el password" type="password" />
          <div className="options-auth">
            <button className="mt-4 btn btn-primary">Registrarme</button>
            <Link to="/sign-in">Iniciar sesión</Link>
          </div>        
        </form>
      </Space>
    </div>
  )  
}

export default SignUp;
