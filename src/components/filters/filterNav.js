import React from "react";
import { Link } from "react-router-dom";

const FilterNav = (props) => {
  return (
    <>
      <div className="brands-categories">
        <h3 className="brands-link-heading">Browse our Top Brands</h3>
        <Link key={props.brandID} to="/brand/1">
          MuscleBlaze
        </Link>
        <Link to="/brand/2">Optimum Nutrition</Link>
        <Link to="/brand/6">MuscleTech</Link>
        <Link to="/brand/7">Labrada</Link>
        <Link to="/brand/8">GNC</Link>
        <Link to="/brand/9">Other</Link>
      </div>
    </>
  );
};

export default FilterNav;
