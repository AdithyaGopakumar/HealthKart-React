import React, { useState } from "react";
import "./cart.css";
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
          <div key={item.id} className="col-md-6">
            <div className="cart-single-item ">
              <img
                className="cart-img"
                src={item.image}
                alt={item.product_name}
              />
              <span className="cart-item-name">{item.product_name}</span>- Rs
              {item.sell_price}
            </div>
            <div className="col-md-4">
              <button
                className="remove-item-btn btn btn-danger"
                onClick={() => {
                  this.props.removeFromCart(item);
                }}
              >
                <span className="remove-text">Remove From Cart</span>
              </button>
            </div>
          </div>
        );
      });
    }
  };

  render() {
    let getTotal = this.props.cart.reduce((acc, curr) => {
      return acc + curr.sell_price;
    }, 0);
    console.log(getTotal, "the total");
    return (
      <div className="container">
        <h1 className="my-5">This Is Your Cart</h1>
        <div className="cart-container container">
          <div className="row">{this.renderCart(this.props.cart)}</div>
          <h3 className="my-5">Your total is: Rs.{getTotal}</h3>
          <button className="place-order-btn">Place Order</button>
        </div>
      </div>
    );
  }
}

export default Cart;
