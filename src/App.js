import './App.css';
import RoutesUnProtect from './components/RoutesUnProtect.js'
import RoutesProtect from './components/RoutesProtect.js'
import { useState, useEffect } from 'react';


const App = () => {
  const [component, setComponent] = useState('')

  useEffect(() => {
    setComponent(<RoutesUnProtect />)
    const user = localStorage.getItem('user')  
    if (user !== null) setComponent(<RoutesProtect />)
  })

  return (
    <div className="App">
      {component}
    </div>
  );
}

export default App;
