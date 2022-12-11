import React from "react";
import { Link } from "react-router-dom";

const BrandsListingDisplay = (props) => {
  const renderData = ({ listData }) => {
    if (listData) {
      if (listData.length > 0) {
        return listData.map((item) => {
          return (
            <React.Fragment>
              <div className="col ">
                <div className="product">
                  <div className="product-illustrations">
                    <a href="#" class="to-product">
                      <img
                        id="product-img"
                        src={item.image}
                        alt={item.product_name}
                      />
                    </a>
                    <div className="offer-tag">
                      <span className="offer">{item.offer}%</span>
                    </div>
                  </div>
                  <div className="product-details">
                    <a href="#" className="to-product">
                      <span className="product-name">{item.product_name}</span>
                    </a>
                    <div className="rating">
                      <ion-icon
                        className="rating-star"
                        name="star-outline"
                      ></ion-icon>
                      <span className="rating-value">
                        {item.rating} ({item.reviews})
                      </span>
                    </div>
                    <div className="price-and-cart">
                      <div className="price">
                        <span className="new-price">Rs.{item.sell_price}</span>
                        <span className="old-price">Rs.{item.old_price}</span>
                      </div>
                      <a href="#" className="add-to-cart">
                        <ion-icon
                          class="cart-icon"
                          name="heart-outline"
                        ></ion-icon>
                        <span className="add-text">Add</span>
                      </a>
                    </div>
                  </div>
                  <div className="premium-price">
                    <div>
                      <span className="premium-price-text">
                        Premium Price:{" "}
                      </span>
                      <span className="premium-price-value">
                        Rs.{item.premium_price}
                      </span>
                    </div>
                    <ion-icon
                      className="lock"
                      name="lock-closed-outline"
                    ></ion-icon>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        });
      } else {
        return (
          <div>
            <h2>No Data As per filter</h2>
          </div>
        );
      }
    } else {
      return (
        <div>
          <img src="/images/loader.gif" alt="loader" />
          <h2>Loading....</h2>
        </div>
      );
    }
  };

  return <div id="content">{renderData(props)}</div>;
};

export default BrandsListingDisplay;
