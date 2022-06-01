import React from "react";
import Header from "../Header";
import Testimonials from "../Testimonials";
import ProductGallery from "../ProductGallery";
import Carousel from "../Carousel";
import SocialMedia from "../SocialMedia";

const Home = () => {
  return (
    <div className="">
      <Header />
      <Testimonials />
      <ProductGallery />
      <Carousel />
      <SocialMedia />
    </div>
  );
};

export default Home;
