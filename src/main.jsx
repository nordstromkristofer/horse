import React from "react";
import ReactDOM from "react-dom/client";
import "../scss/style.scss";
import App from "./App";
import Navbar from "./Navbar";
import HeroVid from "./HeroVid";
import Footer from "./Footer";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>
);
