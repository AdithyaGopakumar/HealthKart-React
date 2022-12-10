import React from "react";
import Extras from "../Elements/extras";
import "../Elements/extras.css";
import AllProducts from "./get products/Allproducts";

const Brands = () => {
  return (
    <>
      <h1 class="container">Showing All Products</h1>
      <div class="container">
        <div class="row">
          <AllProducts />
        </div>
      </div>
      <Extras />
    </>
  );
};

export default Brands;
