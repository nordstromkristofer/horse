import React from 'react';
import ReactDOM from 'react-dom/client';
import "../scss/style.scss";
import App from './App';
import Header from './Header'
import Navbar from './Navbar'

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <App />
  </React.StrictMode>
);