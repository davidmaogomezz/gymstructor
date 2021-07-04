import React, { useState } from 'react'
import { Space } from 'antd'
import {useDispatch, useSelector} from 'react-redux'

import {signUpAction} from '../redux/auth'
import {messageAction} from '../redux/auth'
import {typeAction} from '../redux/auth'

import AlertInstructor from '../components/AlertInstructor'
import FormAuth from '../components/FormAuth'

const SignUp = () => {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const dispatch = useDispatch()
  const message = useSelector(store => store.auth.message)
  const type = useSelector(store => store.auth.type)

  const action = () => {
    dispatch(signUpAction(email, password))
  }

  const resetMessage = () => {
    dispatch(messageAction(''))
    dispatch(typeAction(''))
  }

  return (
    <div className="form-auth">
      <Space direction="vertical">
        <AlertInstructor message={message} type={type} reset={resetMessage}/>
        <FormAuth
          title='Registrarme'
          email={email} 
          password={password} 
          setEmail={setEmail} 
          setPassword={setPassword}
          buttonText='Ingresar'
          action={action}
        />    
      </Space>
    </div>
  )  
}

export default SignUp;
