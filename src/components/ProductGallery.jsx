import React from "react";

const ProductGallery = () => {
  return (
    <div class="container my-0 px-6 mx-auto">
      <section class="mb-32 text-gray-800 text-center lg:text-left">
        <h2 class="text-3xl font-bold mb-12 text-center">Vår Samling</h2>
        <div class="grid lg:grid-cols-3 gap-x-6 lg:gap-x-12">
          <div
            class="bg-white block rounded-lg shadow-lg mb-6 lg:mb-0"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <div class="relative overflow-hidden bg-no-repeat bg-cover">
              <img
                src="https://ichef.bbci.co.uk/news/976/cpsprodpb/B875/production/_102512274_gettyimages-518360318.jpg"
                class="w-full h-44 rounded-t-lg"
              />
              <a href="#!">
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
              </a>
            </div>
            <div class="p-6">
              <h5 class="font-bold text-lg mb-3">Slytherine</h5>
              <h6>American Warmblood</h6>
              <p class="mb-4 pb-2">2,500,000 SEK - 3,000,000 SEK</p>
              <a
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Add to Cart
              </a>
            </div>
          </div>

          <div class="bg-white block rounded-lg shadow-lg mb-6 lg:mb-0">
            <div
              class="relative overflow-hidden bg-no-repeat bg-cover"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://media.istockphoto.com/photos/horse-with-tongue-stuck-out-picture-id1192159893?k=20&m=1192159893&s=612x612&w=0&h=qM07QSReiRRsRNGyAkh9Y_nljw97_nUmyxVCuIk8i8Y="
                class="w-full h-44 rounded-t-lg"
              />
              <a href="#!">
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
              </a>
            </div>
            <div class="p-6">
              <h5 class="font-bold text-lg mb-3">Leviosa</h5>
              <h6>Anglo-Aravo Sardo</h6>
              <p class="mb-4 pb-2">7,000,000 SEK</p>
              <a
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Add to Cart
              </a>
            </div>
          </div>

          <div class="bg-white block rounded-lg shadow-lg">
            <div
              class="relative overflow-hidden bg-no-repeat bg-cover"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://www.heyiceland.is/asset/27235/beautiful-brown-icelandic-horse"
                class="w-full h-44 rounded-t-lg"
              />
              <a href="#!">
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
              </a>
            </div>
            <div class="p-6">
              <h5 class="font-bold text-lg mb-3">Respira</h5>
              <h6>Bashkir Curly</h6>
              <p class="mb-4 pb-2">5,000,000 SEK</p>
              <a
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductGallery;
