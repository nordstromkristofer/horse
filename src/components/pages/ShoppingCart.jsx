import React from "react";
import { useStates } from "../../utilities/states";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { empty, remove, save } from "../../utilities/shoppingCartLogic";
import { useEffect } from "react";
import { sweFormat } from "../../utilities/currencyFormatter";

const ShoppingCart = () => {
  let s = useStates("main");

  let totalSum = s.cartContents.reduce(
    (acc, row) => acc + row.quantity * row.product.price,
    0
  );

  useEffect(() => {
    // Save the cart contents (on quantity changes)
    save();
  });
  return (
    <div className="">
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-screen bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 classNameName="font-semibold text-2xl">Varukorg 🛒</h1>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Produkter
              </h3>

              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Antal
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Pris
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Sum
              </h3>
            </div>
            {s.cartContents.map((row, i) => (
              <div
                className=" flex items-center hover:bg-gray-100 px-6 py-5 mt-10 mb-5"
                key={i}
              >
                <div className="flex flex-col ml-4 flex-grow">
                  <span className="font-bold text-sm">{row.product.name}</span>
                  <a
                    onClick={() => remove(row.product)}
                    className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                  >
                    Ta bort 🗑
                  </a>
                </div>
                <div class="flex justify-center w-1/5">
                  <input
                    className="mx-2 border text-center w-8"
                    style={{ width: 50 }}
                    type="number"
                    min={1}
                    max={100}
                    {...row.bind("quantity")}
                  />
                </div>
                <span class="text-center w-1/5 font-semibold text-sm">
                  {sweFormat(row.product.price)}
                </span>
                <span class="text-center w-1/5 font-semibold text-sm">
                  {sweFormat(row.quantity * row.product.price)}
                </span>
              </div>
            ))}
            <div className="flex justify-between items-center mt-6 pt-6">
              <a
                href={`/product-list`}
                class="inline-flex items-center px-4 py-2 bg-green-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md"
              >
                <svg
                  class="fill-current mr-2 text-indigo-600 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Fortsätt att köpa
              </a>
              {s.cartContents.length ? (
                <button
                  onClick={empty}
                  type="button"
                  className="inline-flex items-center px-4 py-2 bg-red-300 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md"
                >
                  Tom vagn 🗑
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
