import React from "react";
import axios from "axios";

const filterURL = "https://healthkart-render-api.onrender.com/filter";

class CategoryFilter extends React.Component {
  categoryFilter = (e) => {
    let brandId = this.props.brandID;
    let categoryId = e.target.value;
    let filteredURL = "";
    if (categoryId === "") {
      filteredURL = `${filterURL}/${brandId}`;
    } else {
      filteredURL = `${filterURL}/${brandId}?categoryId=${categoryId}`;
    }
    axios.get(filteredURL).then((res) => {
      this.props.filterFunc(res.data);
    });
  };

  render() {
    return (
      <>
        <center>
          <h3>Categories</h3>
        </center>
        <div onChange={this.categoryFilter}>
          <label className="radio">
            <input type="radio" name="category" value="" />
            All
          </label>
          <label className="radio">
            <input type="radio" name="category" value="1" />
            Protein
          </label>
          <label className="radio">
            <input type="radio" name="category" value="2" />
            Gainer
          </label>
          <label className="radio">
            <input type="radio" name="category" value="3" />
            Supplement
          </label>
          <label className="radio">
            <input type="radio" name="category" value="4" />
            Creatine
          </label>
          <label className="radio">
            <input type="radio" name="category" value="5" />
            Pre-workout
          </label>
        </div>
      </>
    );
  }
}

export default CategoryFilter;
