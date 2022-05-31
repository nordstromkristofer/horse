import React from "react";
import Create from "./Edit/Create";
import ProductList2 from "../Products/ProductList2";

const Backoffice = () => {
  return (
    <div>
      <Create className="center" />
      <ProductList2 className="center" />
    </div>
  );
};

export default Backoffice;
