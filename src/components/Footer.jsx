import React from "react";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer class="bg-[#F9EBC8] text-white pt-12 pb-8 px-4">
      <div class="mx-auto px-4 container overflow-hidden flex flex-col lg:flex-row justify-between">
        <a href="/" class="block mr-4 w-1/3">
          <img src={Logo} class="w-40 ml-4 lg:ml-0" alt="logo" />
        </a>

        <div class="w-2/3 block sm:flex text-sm mt-6 lg:mt-0">
          <ul class="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
            <li class="inline-block py-2 px-3 text-black uppercase font-medium tracking-wide">
              Product
            </li>
            <li>
              <a
                href="#"
                class="inline-block py-2 px-3 text-gray-500 hover:text-black no-underline"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                class="inline-block py-2 px-3 text-gray-500 hover:text-black no-underline"
              >
                Integrations
              </a>
            </li>
            <li>
              <a
                href="#"
                class="inline-block py-2 px-3 text-gray-500 hover:text-black no-underline"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                class="inline-block py-2 px-3 text-gray-500 hover:text-black no-underline"
              >
                FAQ
              </a>
            </li>
          </ul>

          <ul class="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
            <li class="inline-block py-2 px-3 text-black uppercase font-medium tracking-wide">
              Company
            </li>
            <li>
              <a
                href="#"
                class="inline-block py-2 px-3 text-gray-500 hover:text-black no-underline"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="#"
                class="inline-block py-2 px-3 text-gray-500 hover:text-black no-underline"
              >
                Terms of Service
              </a>
            </li>
          </ul>
          <li class="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
            <li class="inline-block py-2 px-3 text-black uppercase font-medium tracking-wide">
              Developers
            </li>
            <li>
              <a
                href="#"
                class="inline-block py-2 px-3 text-gray-500 hover:text-black no-underline"
              >
                Developer API
              </a>
            </li>
            <li>
              <a
                href="#"
                class="inline-block py-2 px-3 text-gray-500 hover:text-black no-underline"
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                href="#"
                class="inline-block py-2 px-3 text-gray-500 hover:text-black no-underline"
              >
                Guides
              </a>
            </li>
          </li>
        </div>
      </div>
      <div class="pt-4 mt-4 pt-6 text-gray-600 border-t border-gray-800 text-center">
        {" "}
        © 2022 Golden Horse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
