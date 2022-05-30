import React from "react";
import Create from "./Create";
import ProductList2 from "./ProductList2";
import BackOfficeCamera from "./BackofficeCamera";

const Backoffice = () => {
  return (
    <div>
      <BackOfficeCamera />
      <Create />
      <ProductList2 />
    </div>
  );
};

export default Backoffice;
