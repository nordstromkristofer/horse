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
      {/* <section className="mb-2">
        <HeroVid className="relative overflow-hidden bg-no-repeat bg-cover" />
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
          <div className="flex justify-center items-center h-full">
            <div className="text-center text-white px-6 md:px-12">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                Endast Den Bästa Kvaliteten För Dig!
                <br />
                <span className="text-2xl">
                  Allt i vår butik är valt från bästa kvalitet som passar din
                  drömresa.
                </span>
              </h1>
              <button
                type="button"
                className="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Köp Nu!
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Header;
