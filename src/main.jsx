import React from 'react';
import ReactDOM from 'react-dom/client';
import "../scss/style.scss";
import App from './App';
<<<<<<< HEAD
import Header from './Header'
import Navbar from './Navbar'
=======
import Header from './Header';


>>>>>>> origin/dev

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <App />
  </React.StrictMode>
);