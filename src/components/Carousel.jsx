import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel1 from "../assets/Carousel1.png";
import Carousel2 from "../assets/Carousel2.png";
import Carousel3 from "../assets/Carousel3.png";
import Carousel4 from "../assets/Carousel4.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className="px-5" {...settings}>
      <div className="relative w-full">
        <img src={Carousel1} className="block w-full" alt="Carousel1" />
        <div className="">
          <h5 className="absolute mx-4 top-10 text-xl text-neutral-600">
            Ny sommarkollektion
          </h5>
          <button className="absolute mx-4 top-20 bg-blue-500 text-white p-2 rounded hover:bg-blue-800">
            Utforska nu!
          </button>
        </div>
      </div>

      <div className="relative w-full">
        <img src={Carousel2} className="block w-full" alt="Carousel2" />
        <div className="">
          <h5 className="absolute mx-4 top-10 text-xl text-neutral-600">
            Låt oss åka en tur!
          </h5>
          <button className="absolute mx-4 top-20 bg-blue-500 text-white p-2 rounded hover:bg-blue-800">
            Utforska nu!
          </button>
        </div>
      </div>

      <div className="relative w-full">
        <img src={Carousel3} className="block w-full" alt="Carousel3" />
        <div className="">
          <h5 className="absolute mx-4 top-10 text-xl text-neutral-600">
            Optimalt skydd för din häst
          </h5>
          <button className="absolute mx-4 top-20 bg-blue-500 text-white p-2 rounded hover:bg-blue-800">
            Utforska nu!
          </button>
        </div>
      </div>

      <div className="relative w-full">
        <img src={Carousel4} className="block w-full" alt="Carousel4" />
        <div className="">
          <h5 className="absolute mx-4 top-10 text-xl text-neutral-600">
            Upptäck den nya B Vertigo-kollektionen
          </h5>
          <button className="absolute mx-4 top-20 bg-blue-500 text-white p-2 rounded hover:bg-blue-800">
            Utforska nu!
          </button>
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
