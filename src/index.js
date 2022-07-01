import React, { Component } from "react";
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/Lato/Lato-Italic.ttf';
import './fonts/Lato/Lato-Regular.ttf';
import './fonts/Montserrat/Montserrat-VariableFont_wght.ttf';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
