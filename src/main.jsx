import React from "react";
import ReactDOM from "react-dom/client";
import "../scss/style.scss";
import App from "./App";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import ProductGallery from "./components/ProductGallery";
import Carousel from "./components/Carousel";
import SocialMedia from "./components/SocialMedia";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Testimonials />
    <ProductGallery />
    <Carousel />
    <SocialMedia />
    <Footer />
  </React.StrictMode>
);
