import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from './redux/store';
import './main.css'

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

