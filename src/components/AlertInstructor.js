import { Alert } from 'antd'

const AlertCustom = (props) => {
  let alert = null
  if (props.message !== '' && props.variant !== '') {
    alert = <Alert
              message={props.message}
              type={props.type}
              closable
              onClose={props.reset}
            />
  }
  return alert
}

export default AlertCustom;
