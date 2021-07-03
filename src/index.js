import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import generateStore from './redux/store'
import './index.css';
import './App.css';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';

const store = generateStore()

ReactDOM.render(
  <Provider store={store}>
    <div className="App">
      <App />
    </div>    
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
