import React from 'react';
import ReactDOM from 'react-dom/client';
import "../scss/style.scss";
import App from './App';
import Header from './Header';



ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <App />
  </React.StrictMode>
);