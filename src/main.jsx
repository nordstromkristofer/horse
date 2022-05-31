import React from "react";
import ReactDOM from "react-dom/client";
import "../scss/style.scss";
import App from "./App";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    {/* <Navbar /> */}
    <App />
    {/* <Footer /> */}
  </React.StrictMode>
);
