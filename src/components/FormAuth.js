import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux'

import {messageAction} from '../redux/auth'
import {typeAction} from '../redux/auth'

const FormAuth = (props) => {

  const dispatch = useDispatch()

  const onFinishFailed = () => {
    dispatch(typeAction('error'))    
    dispatch(messageAction('Por favor ingrese la información requerida'))    
  };

  return (
    <>
      <h3>{props.title}</h3>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={props.action}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Por favor ingrese su email',
            },
          ]}
        >
          <Input onChange={(e) => props.setEmail(e.target.value)}/>
        </Form.Item>

        <Form.Item
          label="Contraseña"
          name="password"
          rules={[
            {
              required: true,
              message: 'Por favor ingrese su contraseña',
            },
          ]}
        >
          <Input.Password onChange={(e) => props.setPassword(e.target.value)}/>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            {props.buttonText}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormAuth;