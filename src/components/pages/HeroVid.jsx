import React from "react";
import horseVideo from "../../assets/Hero.mp4";
import { HiArrowNarrowRight } from "react-icons/hi";

const HeroVid = () => {
  return (
    <div className="w-full">
      <video autoPlay loop muted id="video" className="w-full h-window">
        <source src={horseVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default HeroVid;
