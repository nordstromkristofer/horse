import React from "react";
import Header from "../Header";
import Testimonials from "../Testimonials";
import ProductGallery from "../ProductGallery";
import Carousel from "../Carousel";
import SocialMedia from "../SocialMedia";
import ProductLists from "../pages/Products/ProductLists";

const Home = () => {
  return (
    <div className="">
      <Header />
      <Testimonials />
      <ProductLists />
      <Carousel />
      <SocialMedia />
    </div>
  );
};

export default Home;
