
const AlertCustom = (props) => {
  let alert = null
  if (props.message !== '' && props.variant !== '') {
    // TODO: render alert ant design
    alert = <div className="">
              <h1>Meesage: {props.message}</h1>
              <h1>Variant: {props.variant}</h1>
              <button onClick={props.reset}>Cerrar</button>
            </div>  }
  return alert
}

export default AlertCustom;
