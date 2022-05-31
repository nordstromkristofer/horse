import React from "react";
import { GiTrophyCup, GiCheckMark, GiStorkDelivery } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";

const Testimonials = () => {
  return (
    <div className="container my-0 px-6 mx-auto">
      <section className="mb-0 text-gray-800">
        <div className="relative overflow-hidden bg-no-repeat bg-cover"></div>
        <div className="container text-gray-800 px-4 md:px-12">
          <div className="block rounded-lg py-10 md:py-12 px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 mb-12">
              <div className="mb-12 lg:mb-0 text-center mx-auto">
                <GiTrophyCup className="w-8 h-8 text-orange-400 mb-6 mx-auto" />
                <h6 className="font-medium">Hög Kvalitet</h6>
                <p className="text-sm">
                  {" "}
                  Utvald från de bästa raserna i Sverige.
                </p>
              </div>
              <div className="mb-12 lg:mb-0 text-center mx-auto">
                <GiCheckMark className="w-8 h-8 text-orange-400 mb-6 mx-auto" />
                <h6 className="font-medium">Garantiskydd</h6>
                <p className="text-sm"> Över 2 år!</p>
              </div>
              <div className="mb-6 md:mb-0 text-center mx-auto">
                <GiStorkDelivery className="w-8 h-8 text-orange-400 mb-6 mx-auto" />
                <h6 className="font-medium">Gratis Frakt</h6>
                <p className="text-sm"> Beställ över 1500 SEK</p>
              </div>
              <div className="text-center mx-auto">
                <BiSupport className="w-8 h-8 text-orange-400 mb-6 mx-auto" />
                <h6 className="font-medium">24 / 7 Support</h6>
                <p className="text-sm"> Support dygnet runt!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
