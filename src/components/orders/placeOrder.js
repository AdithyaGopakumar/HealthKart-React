import React from "react";
import "../orders/placeOrder.css";

// const URL = "https://healthkart-render-api.onrender.com/cart";
const URL = "http://localhost:8700/cart";

// const orderURL = "https://healthkart-render-api.onrender.com/placeOrder";
const orderURL = "http://localhost:8700/orders";

class PlaceOrder extends React.Component {
  constructor(props) {
    super(props);

    // let sessionData
    this.state = {
      id: Math.floor(Math.random() * 10000),
      user: "Ankit",
      email: "ankit@123.com",
      address: "123 building, abc street, Kochi",
      phone: 9879879870,
      total: 0,
      items: [],
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.props);
  };
  checkOut = () => {
    fetch(orderURL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then(console.log("order placed"));
    // .then(this.props.history.push("viewOrders"));
  };

  renderCart = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <>
            <div className="order-cart-list" key={item.id}>
              <img
                className="order-cart-img"
                src={item.image}
                alt={item.product_name}
              />
              <h3 className="order-cart-name">{item.product_name}</h3>
              <h4 className="order-cart-price">{item.sell_price}</h4>
            </div>
          </>
        );
      });
    }
  };

  render() {
    // console.log(this.props.cart);
    // console.log(total);
    let total = this.props.cart.reduce((acc, curr) => {
      return acc + curr.sell_price;
    }, 0);
    return (
      <>
        <div className="container">
          <div className="panel panel-primary">
            <div className="panel-heading">Your Orders</div>
            <div className="panel-body">
              <form action="http://localhost:4100/paynow" method="POST">
                <input
                  type="hidden"
                  name="order_id"
                  value={this.state.order_id}
                />
                <input type="hidden" name="total" value={this.state.total} />
                <div className="row">
                  <div className="form-group col-md-6">
                    <label for="user" className="control-label">
                      Your Name
                    </label>
                    <input
                      className="form-control"
                      id="user"
                      name="user"
                      value={this.state.user}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="email" className="control-label">
                      Email
                    </label>
                    <input
                      className="form-control"
                      id="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="address" className="control-label">
                      Address
                    </label>
                    <input
                      className="form-control"
                      id="address"
                      name="address"
                      value={this.state.address}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="phone" className="control-label">
                      Phone
                    </label>
                    <input
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={this.state.phone}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {this.renderCart(this.props.cart)}
                <div className="row">
                  <div className="col-md-12">
                    <h2>Your Total : Rs.{total}</h2>
                  </div>
                </div>
                <button
                  className="btn btn-success"
                  onClick={this.checkOut}
                  type="submit"
                >
                  Check Out
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }

  componentDidMount() {
    this.setState({ items: this.props.cart });
    let total = this.props.cart.reduce((acc, curr) => {
      return acc + curr.sell_price;
    }, 0);
    this.setState({ total: total });
    let orders = this.props.cart;
    // console.log(orders, "this is orders");
    fetch(URL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, "this is in db");
      });
  }
}

export default PlaceOrder;
