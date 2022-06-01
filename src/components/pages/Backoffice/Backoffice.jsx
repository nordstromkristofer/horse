import React from "react";
import Create from "./Edit/Create";
import ProductList2 from "../Products/ProductList2";

const Backoffice = () => {
  return (
    <div className="pt-40 pb-40">
      <Create />
      <ProductList2 />
    </div>
  );
};

export default Backoffice;
