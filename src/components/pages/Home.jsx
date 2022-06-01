import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import HeroVid from "./HeroVid";
import Testimonials from "../Testimonials";
import ProductGallery from "../ProductGallery";
import Carousel from "../Carousel";
import SocialMedia from "../SocialMedia";

const Home = () => {
  return (
    <div className="">
      <HeroVid className="static" />

      <Testimonials />
      <ProductGallery />
      <Carousel />
      <SocialMedia />
    </div>
  );
};

export default Home;
