import React from 'react';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { hydrate, render } from "react-dom";

const APP = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    APP, rootElement);
} else {
  render(
    APP, rootElement);
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
