import React from "react";
import { Link } from "react-router-dom";
// const allrProductURL = "https://healthkart-render-api.onrender.com/allproducts";
const allrProductURL = "http://localhost:9800/allproducts";

class AllProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      allProducts: "",
    };
  }
  getAllProducts = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <>
            <div class="item product-padding col-xl-3">
              <div class="product">
                <div class="product-illustrations">
                  <Link to={`/details?${item.id}`} class="to-product">
                    <img
                      id="product-img"
                      src={item.image}
                      alt={item.product_name}
                    />
                  </Link>
                  <a href="#">
                    <ion-icon
                      class="heart-icon"
                      name="heart-outline"
                    ></ion-icon>
                  </a>
                  <div class="offer-tag">
                    <span class="offer">{item.offer}%</span>
                  </div>
                </div>
                <div class="product-details">
                  <Link to={`/details?${item.id}`} class="to-product">
                    <span class="product-name">{item.product_name}</span>
                  </Link>
                  <div class="rating">
                    <ion-icon
                      class="rating-star"
                      name="star-outline"
                    ></ion-icon>
                    <span class="rating-value">
                      {item.rating} ({item.reviews})
                    </span>
                  </div>
                  <div class="price-and-cart">
                    <div class="price">
                      <span class="new-price">Rs.{item.sell_price}</span>
                      <span class="old-price">Rs.{item.old_price}</span>
                    </div>
                    <a href="#" class="add-to-cart">
                      <ion-icon
                        class="cart-icon"
                        name="heart-outline"
                      ></ion-icon>
                      <span class="add-text">Add</span>
                    </a>
                  </div>
                </div>
                <div class="premium-price">
                  <div>
                    <span class="premium-price-text">Premium Price: </span>
                    <span class="premium-price-value">
                      Rs.{item.premium_price}
                    </span>
                  </div>
                  <ion-icon class="lock" name="lock-closed-outline"></ion-icon>
                </div>
              </div>
            </div>
          </>
        );
      });
    }
  };

  render() {
    return <>{this.getAllProducts(this.state.allProducts)}</>;
  }

  componentDidMount() {
    fetch(allrProductURL, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ allProducts: data });
      });
  }
}

export default AllProducts;
