import React from "react";
import { Link } from "react-router-dom";
const categoryURL = "https://healthkart-render-api.onrender.com/categories";

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: "",
    };
  }
  getCategories = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <>
            <div>
              <Link to={`/listing/${item.category_id}`}>{item.category}</Link>
            </div>
          </>
        );
      });
    }
  };

  render() {
    return <>{this.getCategories(this.state.categories)}</>;
  }

  componentDidMount() {
    fetch(categoryURL, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ categories: data });
      });
  }
}

export default Categories;
