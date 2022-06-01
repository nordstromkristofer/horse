import React from "react";
import HeroVid from "./pages/HeroVid";

const Header = () => {
  return (
    <div>
      <section className="mb-40">
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
      </section>
    </div>
  );
};

export default Header;
