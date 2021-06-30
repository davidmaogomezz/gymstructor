
import { Alert } from 'react-bootstrap';

const AlertCustom = (props) => {
  let alert = null
  if (props.message !== '' && props.variant !== '') {
    alert = <Alert className="mt-2" variant={props.variant} onClose={props.reset} dismissible>
              {props.message}
            </Alert>
  }
  return alert
}

export default AlertCustom;
