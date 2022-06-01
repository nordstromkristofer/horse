import React from "react";
import horseVid from "../assets/Hero.mp4";

const Header = () => {
  return (
    <div className="w-full h-[90vh] top-[90px] mb-20">
      <video
        className="object-cover h-full w-full absolute -z-10"
        src={horseVid}
        autoPlay
        loop
        muted
      />
      <div className="w-full h-[125%] flex flex-col justify-center items-center text-white px-4 text-center">
        <h1 className="text-center text-white text-2xl font-bold">
          Endast Den Bästa Kvaliteten För Dig!
        </h1>
        <h1 className="py-2 text-5xl text-bold">
          <span className="text-amber-400">Golden</span> Horse
        </h1>
        <p className="text-xl py-4">
          Allt i vår butik är valt från bästa kvalitet som passar din drömresa.
        </p>
        <div>
          <button
            className="inline-block px-7 py-3 border-2 border-amber-400 text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Köp Nu!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
