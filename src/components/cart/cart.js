import React, { useState } from "react";
import "./cart.css";
import Extras from "../Elements/extras";
import "../Elements/extras.css";
import { Link } from "react-router-dom";
class Cart extends React.Component {
  constructor(props) {
    console.log(props.cart, "this is cart in cart");
    super(props);

    this.state = {
      total: "",
      currCart: this.props.cart,
    };
  }
  orderCart = [];

  renderCart = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <div class="ind-item container">
            <img
              src={item.image}
              alt={item.product_name}
              class="cart-item-img"
            />
            <div class="cart-item-data">
              <p class="cart-item-name">{item.product_name}</p>
              <div class="cart-price-flex">
                <span class="cart-item-price">₹ {item.sell_price}</span>
                <span class="cart-item-offer">{item.offer}% OFF</span>
              </div>
              <div>
                <span class="cart-item-mrp-text">MRP: </span>
                <span class="cart-item-old-price">₹ {item.old_price}</span>
              </div>
            </div>
            <button
              class="remove-item"
              onClick={() => {
                this.props.removeFromCart(item);
              }}
            >
              <ion-icon name="trash-outline"></ion-icon>
            </button>
          </div>
          // <div key={item.id} className="col-md-6">
          //   <div className="cart-single-item ">
          //     <img
          //       className="cart-img"
          //       src={item.image}
          //       alt={item.product_name}
          //     />
          //     <span className="cart-item-name">{item.product_name}</span>- Rs
          //     {item.sell_price}
          //   </div>
          //   <div className="col-md-4">
          //     <button
          //       className="remove-item-btn btn btn-danger"
          //       onClick={() => {
          //         this.props.removeFromCart(item);
          //       }}
          //     >
          //       <span className="remove-text">Remove From Cart</span>
          //     </button>
          //   </div>
          // </div>
        );
      });
    }
  };

  render() {
    let getTotal = this.state.currCart.reduce((acc, curr) => {
      return acc + curr.sell_price;
    }, 0);
    let getMRP = this.state.currCart.reduce((acc, curr) => {
      return acc + curr.old_price;
    }, 0);
    let discount = getMRP - getTotal;
    console.log(getTotal, "the total", getMRP, discount);
    return (
      <>
        <section class="cart">
          <div class="container">
            <div class="row">
              <div class="col col-md-7">
                <div class="shopping-cart">
                  <h1 class="cart-heading">
                    Shopping Cart ({this.state.currCart.length} items)
                  </h1>
                  <>{this.renderCart(this.state.currCart)}</>
                </div>
              </div>
              <div class="col col-md-5">
                <div class="order-summary">
                  <span class="summary">Order Summary</span>
                  <span class="number-of-items">
                    ({this.state.currCart.length} items)
                  </span>
                  <div class="total-mpr flex mt-5">
                    <span class="price-text">Total MRP</span>
                    <span class="mrp">₹ {getMRP}</span>
                  </div>
                  <div class="total-discounts flex">
                    <span class="price-text">Total Discounts</span>
                    <span class="discount">-₹ {discount}</span>
                  </div>
                  <div class="shipping-charge flex">
                    <span class="price-text">Shipping Charges</span>
                    <span class="free">FREE</span>
                  </div>
                  <hr />
                  <div class="payable-amount flex">
                    <span class="price-text-bold">Payable Amount</span>
                    <span class="pay-rate">₹ {getTotal}</span>
                  </div>
                  <p class="show-savings">
                    You will Save ₹ {discount} & Eligible for Free Shipping on
                    this order
                  </p>
                  {/* <button class="proceed-btn">
                    Proceed to Pay ₹ {getTotal}
                  </button> */}
                  <Link to="/placeOrder" className="proceed-btn">
                    Proceed to Pay ₹ {getTotal}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Extras />
      </>
    );
  }
}

export default Cart;
