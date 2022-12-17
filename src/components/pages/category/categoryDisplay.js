import React from "react";
import Extras from "../../Elements/extras";
import "../../Elements/extras.css";
import Categories from "./category";
import "../../Elements/brandsAndCategory.css";

const CategoryDisplay = () => {
  return (
    <>
      <h1 class="container heading-text">Showing All Categories</h1>
      <div class="container">
        <Categories />
      </div>
      <Extras />
    </>
  );
};

export default CategoryDisplay;
