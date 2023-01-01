import React from "react";
import { Link } from "react-router-dom";
const categoryURL = "http://localhost:9800/categories";
// const categoryURL = "https://healthkart-render-api.onrender.com/categories";

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
            <div class="brand-category-item">
              <img
                src={item.image}
                alt=""
                class="brand-category-img category-item-image"
              />

              <p class="brand-category-text">{item.text}</p>
              <div class="to-brand-category">
                <Link
                  to={`/listing/${item.category_id}`}
                  class="brand-category-link"
                >
                  Go to {item.category}
                </Link>
              </div>
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
