import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div class="carousel-item relative float-left w-full">
        <img
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
          class="block w-full"
          alt="..."
        />
      </div>

      <div class="carousel-item relative float-left w-full">
        <img
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
          class="block w-full"
          alt="..."
        />
      </div>

      <div class="carousel-item relative float-left w-full">
        <img
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
          class="block w-full"
          alt="..."
        />
      </div>

      <div class="carousel-item relative float-left w-full">
        <img
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
          class="block w-full"
          alt="..."
        />
      </div>

      <div class="carousel-item relative float-left w-full">
        <img
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
          class="block w-full"
          alt="..."
        />
      </div>
    </Slider>
  );
};

export default Carousel;
