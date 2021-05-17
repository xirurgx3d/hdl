import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { BrowserRouter, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

ReactDOM.render (( 
  <BrowserRouter>
      <App />
  </BrowserRouter>
), document.getElementById('root'));

