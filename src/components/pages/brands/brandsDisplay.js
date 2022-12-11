import React from "react";
import Extras from "../../Elements/extras";
import "../../Elements/extras.css";
import Brand from "./brands";

const BrandDisplay = () => {
  return (
    <>
      <h1 class="container">Showing All Brands</h1>
      <div class="container">
        <Brand />
      </div>
      <Extras />
    </>
  );
};

export default BrandDisplay;
