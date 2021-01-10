import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './reducers/reduxStore';

ReactDOM.render(

  <React.StrictMode>

    <App />

  </React.StrictMode >,
  document.getElementById('root')
)
reportWebVitals();
