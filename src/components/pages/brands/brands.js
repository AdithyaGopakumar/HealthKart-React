import React from "react";
import { Link } from "react-router-dom";
const brandURL = "https://healthkart-render-api.onrender.com/brands";

class Brand extends React.Component {
  constructor() {
    super();
    this.state = {
      brands: "",
    };
  }
  getBrand = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <>
            <div class="brand-category-item">
              <img
                src={item.image}
                alt=""
                class="brand-category-img category-item-img"
              />

              <p class="brand-category-text">{item.text}</p>
              <div class="to-brand-category">
                <Link
                  to={`/brand/${item.brand_id}`}
                  class="brand-category-link"
                >
                  Go to {item.brand}
                </Link>
              </div>
            </div>
          </>
        );
      });
    }
  };

  render() {
    return <>{this.getBrand(this.state.brands)}</>;
  }

  componentDidMount() {
    fetch(brandURL, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ brands: data });
      });
  }
}

export default Brand;
