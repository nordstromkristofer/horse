import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import HeroVid from "./HeroVid";
import Navbar from "../Navbar";
import Header from "../Header";

const Home = () => {
  return (
    <div className="">
      <Header />
      {/* <HeroVid className="static" />
      <div className="absolute backdrop-blur-md bg-white/30 top-20 left-80 w-1/3 h-92">
        <h1 className="px-10 pt-10 pb-5 text-5xl">
          Endast Den Bästa Kvaliteten För Dig!
        </h1>
        <p className="px-10 pb-10 text-lg">
          Allt i vår butik är valt från bästa kvalitet som passar din drömresa.
        </p>
        <div className="px-10 pb-10">
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center bg-orange-400">
            {" "}
            Köp Nu!
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
